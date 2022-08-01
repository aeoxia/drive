# def run():
#     foo = "Foo"
#     bar = "Bar"


#     print(foo, bar)
#     print(f"hello {foo} {bar} {len(foo)}")


#     def nested_body():
#         global moo
#         moo = "Mooo"
#         baz = "Bazz"
    
#     nested_body()

#     print(moo)
#     # print(baz)


# run()


#region Class
class Student():
    def __init__(self, name, age):
        self.name = name
        self.age = age

student = Student("Mich","99999")
print(f"{student.name}")

student_dict = {
    "name": "Nameeee",
    "age": "Agggge",
}   

print(student_dict["name"])
#endregion

scores = [1, 2, 3, 4]
scores.append(18)
print(scores)


number1 = 1
number2 = 2

if number1 < number2 or not (number2 > 0):
    pass


