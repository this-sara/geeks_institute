# 🌟 Exercise 8 : Star Wars Quiz

# Quiz data
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

# Function to ask questions and track answers
def run_quiz():
    correct = 0
    incorrect = 0
    wrong_answers = []  # List to store wrong answers
    
    for item in data:
        user_answer = input(item["question"] + " ").strip()  # Ask question
        if user_answer.lower() == item["answer"].lower():
            print("✅ Correct!\n")
            correct += 1
        else:
            print(f"❌ Wrong! The correct answer is {item['answer']}\n")
            incorrect += 1
            wrong_answers.append({"question": item["question"],"your_answer": user_answer, "correct_answer": item["answer"]})
    return correct, incorrect, wrong_answers

# Function to display results
def show_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct and {incorrect} incorrect answers.")
    
    if wrong_answers:
        print("\nHere are the questions you answered wrong:")
        for item in wrong_answers:
            print(f"Q: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")
    
    # Bonus: ask to play again if more than 3 wrong
    if incorrect > 3:
        play_again = input("You had more than 3 wrong answers. Do you want to play again? (yes/no) ").strip().lower()
        if play_again == "yes":
            start_quiz()

# Function to start the quiz
def start_quiz():
    correct, incorrect, wrong_answers = run_quiz()
    show_results(correct, incorrect, wrong_answers)

# Run the quiz
start_quiz()
