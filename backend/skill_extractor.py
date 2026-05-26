skills_db = [
    "Python",
    "Java",
    "SQL",
    "React",
    "Machine Learning",
    "Selenium",
    "Power BI",
    "Tableau"
]

def extract_skills(text):

    found_skills = []

    for skill in skills_db:

        if skill.lower() in text.lower():
            found_skills.append(skill)

    return found_skills
