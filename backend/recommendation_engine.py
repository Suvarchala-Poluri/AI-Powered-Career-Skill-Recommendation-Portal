def recommend_role(skills):

    if "Machine Learning" in skills:
        return "Data Scientist"

    elif "React" in skills:
        return "Frontend Developer"

    elif "Selenium" in skills:
        return "Automation Test Engineer"

    elif "Java" in skills:
        return "Software Developer"

    else:
        return "General IT Role"
