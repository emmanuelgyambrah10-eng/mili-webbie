# Program to calculate net income and average yearly income with 10% tax

salary = float(input("Enter your monthly salary: "))

# Step 1: Find yearly salary
yearly_salary = salary * 12

# Step 2: Deduct 10% tax
tax = yearly_salary * 0.10
net_yearly_income = yearly_salary - tax

# Step 3: Average yearly income (per month)
average_yearly = net_yearly_income / 12

print("Yearly Salary before tax: GHC", yearly_salary)
print("Tax deducted (10%): GHC", tax)
print("Net Yearly Income: GHC", net_yearly_income)
print("Average Monthly Income after Yearly Tax: GHC", average_yearly)
