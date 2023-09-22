def get_grade(s1, s2, s3):
  avg = (s1 + s2 + s3) / 3

  if (avg >= 90):
    grade = "A"
  elif (avg >= 80):
    grade = "B"
  elif (avg >= 70):
    grade = "C"
  elif (avg >= 60):
    grade = "D"
  else:
    grade = "F"

  return grade
