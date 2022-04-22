import json
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException, NoSuchElementException


COURSE_CODE_REGEX = re.compile(r'[A-Za-z]{3}[0-9]{5}')
REQ_TITLE_REGEX = re.compile(r'[a-z]{1,4}-?requisites?|equivalent|assumed knowledge')


def extract_code(text):
    try:
        return COURSE_CODE_REGEX.search(text).group()
    except:
        return None  # no matched code in text


def get_unit_info(driver, url):
    driver.get(url)
    data = {"url": url}

    try:
        # find basic course info
        data["code"] = driver.find_element(By.CLASS_NAME, "course-code").text
        data["title"] = driver.find_element(By.CLASS_NAME, "title-block").text
        data["credit_points"] = float(driver.find_element(By.CLASS_NAME, "course-level").text.split(" ")[0])
        data["locations"] = driver.find_element(By.CLASS_NAME, "course-location").text.split(",")

        # find out when this unit runs (if listed)
        data["runs"] = {}
        for element in driver.find_elements(By.XPATH, "//*[@class='table table--blocked-th']/thead/tr/th"):
            words = element.text.split("\n")
            if len(words) == 3:
                data["runs"][words[2]] = words[0]

        # finding prerequisites, corequisites, etc
        data["requisites"] = {}

        # finding
        req_text = driver.find_element(By.XPATH, "//*[@class='course-info general-content']").text.replace("\n", "")

        req_titles = REQ_TITLE_REGEX.findall(req_text.lower())
        req_subs = REQ_TITLE_REGEX.split(req_text.lower())[1:]

        for count, title in enumerate(req_titles):
            print(f"finding codes in {req_subs[count]}")
            data["requisites"][title] = COURSE_CODE_REGEX.findall(req_subs[count])


    except NoSuchElementException as e:
        print(f"[ERROR]: {url} - {str(e)}...")

    except Exception as e:
        print(e)

    finally:
        return data


def main():
    unit_data = {}
    driver = webdriver.Chrome()
    """
    print(get_unit_info(driver,
                        "https://www.swinburne.edu.au/study/courses/units/Artificial-Intelligence-for-Engineering-COS40007/local"))
    """

    with open('units.json') as json_file:
        unit_urls = json.load(json_file)

    print(len(unit_urls))
    for unit_code in list(unit_urls.keys()):
        unit_data[unit_code] = get_unit_info(driver, unit_urls[unit_code])

    print(unit_data)


main()
