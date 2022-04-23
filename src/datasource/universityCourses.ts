export const courseData = {
	COS10003: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computer-and-Logic-Essentials-COS10003/local',
		code: 'COS10003',
		title: 'Computer and Logic Essentials',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			'assumed knowledge': []
		}
	},
	COS10004: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computer-Systems-COS10004/local',
		code: 'COS10004',
		title: 'Computer Systems',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['eng10004', 'eat10016', 'ict10001'],
			'pre-requisite': ['cos10009'],
			'assumed knowledge': []
		}
	},
	COS10005: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Web-Development-COS10005/local',
		code: 'COS10005',
		title: 'Web Development',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			'anti-requisites': ['cos10011']
		}
	},
	COS10009: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Introduction-to-Programming-COS10009/local',
		code: 'COS10009',
		title: 'Introduction to Programming',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			corequisites: ['cos00002']
		}
	},
	COS10011: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Creating-Web-Applications-COS10011/local',
		code: 'COS10011',
		title: 'Creating Web Applications',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			'co-requisite': ['cos10009', 'swe20004'],
			'anti-requisites': ['cos10005'],
			'assumed knowledge': []
		}
	},
	COS10015: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computer-Systems-and-Networks-COS10015/local',
		code: 'COS10015',
		title: 'Computer Systems and Networks',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Wantirna'],
		runs: {},
		requisites: {
			prerequisites: []
		}
	},
	COS10018: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Programming-Concepts-and-Algorithms-COS10018/local',
		code: 'COS10018',
		title: 'Programming Concepts and Algorithms',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Wantirna'],
		runs: {},
		requisites: {
			prerequisites: []
		}
	},
	COS10022: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Introduction-to-Data-Science-COS10022/local',
		code: 'COS10022',
		title: 'Introduction to Data Science',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {}
	},
	COS10025: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Technology-in-an-Indigenous-Context-Project-COS10025/local',
		code: 'COS10025',
		title: 'Technology in an Indigenous Context Project',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			equivalent: ['cos10027']
		}
	},
	COS10026: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computing-Technology-Inquiry-Project-COS10026/local',
		code: 'COS10026',
		title: 'Computing Technology Inquiry Project',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {}
	},
	COS10027: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Technology-in-an-Indigenous-Context-Project-COS10027/local',
		code: 'COS10027',
		title: 'Technology in an Indigenous Context Project',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			equivalent: ['cos10025', 'acc20019']
		}
	},
	COS10028: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Introduction-to-Programming-COS10028/local',
		code: 'COS10028',
		title: 'Introduction to Programming',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			equivalent: ['cos10009']
		}
	},
	COS20001: {
		url: 'https://www.swinburne.edu.au/study/courses/units/User-Centred-Design-COS20001/local',
		code: 'COS20001',
		title: 'User-Centred Design',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			corequisites: ['cos00003']
		}
	},
	COS20007: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Object-Oriented-Programming-COS20007/local',
		code: 'COS20007',
		title: 'Object-Oriented Programming',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10009', 'swe20004', 'cos10001', 'inf10016']
		}
	},
	COS20012: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Data-Communications-and-Security-COS20012/local',
		code: 'COS20012',
		title: 'Data Communications and Security',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {},
		requisites: {
			prerequisites: [],
			'pre-requisites': ['cos20007', 'swe20004']
		}
	},
	COS20013: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Web-Programming-COS20013/local',
		code: 'COS20013',
		title: 'Web Programming',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: ['cos10011', 'cos10013']
		}
	},
	COS20015: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Fundamentals-of-Data-Management-COS20015/local',
		code: 'COS20015',
		title: 'Fundamentals of Data Management',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10009', 'swe20004']
		}
	},
	COS20016: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Operating-System-Configuration-COS20016/local',
		code: 'COS20016',
		title: 'Operating System Configuration',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: []
		}
	},
	COS20018: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Java-Programming-COS20018/local',
		code: 'COS20018',
		title: 'Java Programming',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Wantirna'],
		runs: {},
		requisites: {
			prerequisites: ['cos10018']
		}
	},
	COS20019: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Cloud-Computing-Architecture-COS20019/local',
		code: 'COS20019',
		title: 'Cloud Computing Architecture',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20016', 'tne10006', 'tne10005', 'cos10005', 'cos10011', 'cos10026']
		}
	},
	COS20028: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Big-Data-Architecture-and-Application-COS20028/local',
		code: 'COS20028',
		title: 'Big Data Architecture and Application',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10022', 'cos20007', 'cos30016']
		}
	},
	COS20029: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Robotic-Process-Automation-Design-and-Development-COS20029/local',
		code: 'COS20029',
		title: 'Robotic Process Automation Design and Development',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {}
	},
	COS20031: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computing-Technology-Design-Project-COS20031/local',
		code: 'COS20031',
		title: 'Computing Technology Design Project',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {}
	},
	COS30002: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Artificial-Intelligence-for-Games-COS30002/local',
		code: 'COS30002',
		title: 'Artificial Intelligence for Games',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20011', 'cos20007', 'cos30016', 'swe20004']
		}
	},
	COS30008: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Data-Structures-and-Patterns-COS30008/local',
		code: 'COS30008',
		title: 'Data Structures and Patterns',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos30016', 'cos20011']
		}
	},
	COS30015: {
		url: 'https://www.swinburne.edu.au/study/courses/units/IT-Security-COS30015/local',
		code: 'COS30015',
		title: 'IT Security',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [
				'cos10009',
				'swe20004',
				'cos10011',
				'cos10005',
				'cos10026',
				'tne10005',
				'tne10006'
			]
		}
	},
	COS30017: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Software-Development-for-Mobile-Devices-COS30017/local',
		code: 'COS30017',
		title: 'Software Development for Mobile Devices',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos20011', 'cos30014']
		}
	},
	COS30018: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Intelligent-Systems-COS30018/local',
		code: 'COS30018',
		title: 'Intelligent Systems',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos20011', 'cos30016', 'swe20004'],
			'assumed knowledge': []
		}
	},
	COS30019: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Introduction-to-Artificial-Intelligence-COS30019/local',
		code: 'COS30019',
		title: 'Introduction to Artificial Intelligence',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos30008'],
			'assumed knowledge': []
		}
	},
	COS30020: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Advanced-Web-Development-COS30020/local',
		code: 'COS30020',
		title: 'Advanced Web Development',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10009', 'cos10011', 'cos10005', 'cos10026']
		}
	},
	COS30023: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Languages-in-Software-Design-COS30023/local',
		code: 'COS30023',
		title: 'Languages in Software Design',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos20011', 'swe20004']
		}
	},
	COS30031: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Games-Programming-COS30031/local',
		code: 'COS30031',
		title: 'Games Programming',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos20011', 'cos30016', 'cos30014', 'swe20004']
		}
	},
	COS30041: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Creating-Secure-and-Scalable-Software-COS30041/local',
		code: 'COS30041',
		title: 'Creating Secure and Scalable Software',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10005', 'cos10011', 'cos20001', 'cos20007', 'swe20004']
		}
	},
	COS30043: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Interface-Design-and-Development-COS30043/local',
		code: 'COS30043',
		title: 'Interface Design and Development',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10005', 'cos10011', 'cos10026', 'eng20009', 'cos20007', 'swe20004']
		}
	},
	COS30045: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Data-Visualisation-COS30045/local',
		code: 'COS30045',
		title: 'Data Visualisation',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10009']
		}
	},
	COS30047: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Artificial-Intelligence-for-Engineering-COS30047/local',
		code: 'COS30047',
		title: 'Artificial Intelligence for Engineering',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: ['cos10009']
		}
	},
	COS30049: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computing-Technology-Innovation-Project-COS30049/local',
		code: 'COS30049',
		title: 'Computing Technology Innovation Project',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {}
	},
	COS40003: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Concurrent-Programming-COS40003/local',
		code: 'COS40003',
		title: 'Concurrent Programming',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos30008', 'cos20007', 'swe20004'],
			'anti-requisites': ['cos30003']
		}
	},
	COS40004: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Topics-in-Computer-Science-COS40004/local',
		code: 'COS40004',
		title: 'Topics in Computer Science',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: []
		}
	},
	COS40005: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computing-Technology-Project-A-COS40005/local',
		code: 'COS40005',
		title: 'Computing Technology Project A',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: []
		}
	},
	COS40006: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Computing-Technology-Project-B-COS40006/local',
		code: 'COS40006',
		title: 'Computing Technology Project B',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: ['cos40005']
		}
	},
	COS40007: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Artificial-Intelligence-for-Engineering-COS40007/local',
		code: 'COS40007',
		title: 'Artificial Intelligence for Engineering',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: ['cos10009']
		}
	},
	TNE10005: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Network-Administration-TNE10005/local',
		code: 'TNE10005',
		title: 'Network Administration',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {}
	},
	TNE10006: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Networks-and-Switching-TNE10006/local',
		code: 'TNE10006',
		title: 'Networks and Switching',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [],
			'anti-requisite': ['tne10002', 'tne20001']
		}
	},
	TNE20002: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Network-Routing-Principles-TNE20002/local',
		code: 'TNE20002',
		title: 'Network Routing Principles',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne10006'],
			'anti-requisite': ['tne10002', 'tne70003']
		}
	},
	TNE20003: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Internet-and-Cybersecurity-for-Engineering-Applications-TNE20003/local',
		code: 'TNE20003',
		title: 'Internet and Cybersecurity for Engineering Applications',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {}
	},
	TNE30003: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Communications-Principles-TNE30003/local',
		code: 'TNE30003',
		title: 'Communications Principles',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['mth10007', 'mth10012', 'mth10013', 'mth10015', 'mth10016']
		}
	},
	TNE30004: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Communications-Information-Theory-TNE30004/local',
		code: 'TNE30004',
		title: 'Communications Information Theory',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {},
		requisites: {
			prerequisites: ['tne30003']
		}
	},
	TNE30009: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Network-Security-and-Resilience-TNE30009/local',
		code: 'TNE30009',
		title: 'Network Security and Resilience',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne10006', 'cos20012']
		}
	},
	TNE30012: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Secure-Remote-Access-Networks-TNE30012/local',
		code: 'TNE30012',
		title: 'Secure Remote Access Networks',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne20001', 'tne20002']
		}
	},
	TNE30018: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Enterprise-Network-Server-Administration-TNE30018/local',
		code: 'TNE30018',
		title: 'Enterprise Network Server Administration',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne10005']
		}
	},
	TNE30019: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Unix-in-the-Internet-TNE30019/local',
		code: 'TNE30019',
		title: 'Unix in the Internet',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10009', 'eng10004', 'tne20001', 'tne20002']
		}
	},
	TNE30022: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Design-and-Management-of-Networks-TNE30022/local',
		code: 'TNE30022',
		title: 'Design and Management of Networks',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne20002', 'tne20001']
		}
	},
	TNE30023: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Advanced-Switching-TNE30023/local',
		code: 'TNE30023',
		title: 'Advanced Switching',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne20001', 'tne20002']
		}
	},
	TNE30024: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Deploying-Secure-Engineering-Applications-Online-TNE30024/local',
		code: 'TNE30024',
		title: 'Deploying Secure Engineering Applications Online',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {},
		requisites: {
			prerequisites: ['tne20003']
		}
	},
	TNE40001: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Broadband-Multimedia-Networks-TNE40001/local',
		code: 'TNE40001',
		title: 'Broadband Multimedia Networks',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne20002']
		}
	},
	TNE40003: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Wireless-Communications-TNE40003/local',
		code: 'TNE40003',
		title: 'Wireless Communications',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['tne30003']
		}
	},
	SWE20001: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Managing-Software-Projects-SWE20001/local',
		code: 'SWE20001',
		title: 'Managing Software Projects',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['swe20004', 'cos20007'],
			'assumed knowledge': []
		}
	},
	SWE20004: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Technical-Software-Development-SWE20004/local',
		code: 'SWE20004',
		title: 'Technical Software Development',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn',
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10001', 'cos10009', 'rme10001', 'eng10004']
		}
	},
	SWE30001: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Real-Time-Programming-SWE30001/local',
		code: 'SWE30001',
		title: 'Real-Time Programming',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos30008', 'cos20007', 'swe20004']
		}
	},
	SWE30003: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Software-Architectures-and-Design-SWE30003/local',
		code: 'SWE30003',
		title: 'Software Architectures and Design',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['swe20001', 'cos20007', 'inf30029']
		}
	},
	SWE30009: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Software-Testing-and-Reliability-SWE30009/local',
		code: 'SWE30009',
		title: 'Software Testing and Reliability',
		credit_points: 12.5,
		locations: ['Hawthorn'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'swe20004', 'cos20011']
		}
	},
	SWE30010: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Managing-IT-Projects-SWE30010/local',
		code: 'SWE30010',
		title: 'Managing IT Projects',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos10009'],
			'anti-requisite': ['inf30029']
		}
	},
	SWE30011: {
		url: 'https://www.swinburne.edu.au/study/courses/units/IoT-Programming-SWE30011/local',
		code: 'SWE30011',
		title: 'IoT Programming',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos10011', 'cos10005', 'cos10026']
		}
	},
	SWE30012: {
		url: 'https://www.swinburne.edu.au/study/courses/units/IoT-Launcher-Project-SWE30012/local',
		code: 'SWE30012',
		title: 'IoT Launcher Project',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['swe30011', 'cos20007', 'swe20004']
		}
	},
	SWE40001: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Software-Engineering-Project-A-SWE40001/local',
		code: 'SWE40001',
		title: 'Software Engineering Project A',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 1': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['cos20007', 'cos30014', 'swe20004', 'swe40001', 'swe40002', 'cos30021']
		}
	},
	SWE40002: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Software-Engineering-Project-B-SWE40002/local',
		code: 'SWE40002',
		title: 'Software Engineering Project B',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: ['swe40001', 'swe40001', 'swe40002'],
			'anti-requisites': ['cos30022']
		}
	},
	SWE40006: {
		url: 'https://www.swinburne.edu.au/study/courses/units/Software-Deployment-and-Evolution-SWE40006/local',
		code: 'SWE40006',
		title: 'Software Deployment and Evolution',
		credit_points: 12.5,
		locations: ['Hawthorn', ' Sarawak'],
		runs: {
			'Higher Ed. Semester 2': 'Hawthorn'
		},
		requisites: {
			prerequisites: [
				'swe20001',
				'inf30029',
				'swe30010',
				'swe20001',
				'swe30003',
				'cos20031',
				'ict20025',
				'swe30004'
			]
		}
	}
};