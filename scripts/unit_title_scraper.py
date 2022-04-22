import json
import selenium.common.exceptions
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException


BASE_URL = "https://www.swinburne.edu.au/courses/browse-course-units/?query="


# check if unit code exists, return title
def get_unit_url(driver, unit_code):
    driver.get(BASE_URL + unit_code)
    try:
        unit_element = WebDriverWait(driver, 0.3).until(

            EC.presence_of_element_located((By.CSS_SELECTOR,
                                            ".results-item, .results__empty text-center"))
        )
        print(unit_element.get_attribute('href'))
        return unit_element.get_attribute('href')  # return link to outline page
    except TimeoutException:
        pass


def main():
    unit_data = {}
    driver = webdriver.Chrome()

    for level in range(1, 5):   # loop through unit levels
        for number in range(1, 50):   # loop through possible unit numbers
            code = f"SWE{level}{number:04}"
            title = get_unit_url(driver, code)

            if title is not None:
                unit_data[code] = title

    with open("units.json", "a") as f:
        f.write(json.dumps(unit_data))

    driver.quit()


if __name__ == "__main__":
    main()
