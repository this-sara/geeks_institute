from flask import Flask, jsonify, request

app = Flask(__name__)

# ==========================
# Données initiales
# ==========================
students = [
    {"id": 1, "name": "John Doe", "email": "john.doe@example.com", "age": 20, "gender": "male"},
    {"id": 2, "name": "Jane Doe", "email": "jane.doe@example.com", "age": 21, "gender": "female"},
    {"id": 3, "name": "Jim Doe", "email": "jim.doe@example.com", "age": 22, "gender": "male"},
    {"id": 4, "name": "Jill Doe", "email": "jill.doe@example.com", "age": 23, "gender": "female"},
    {"id": 5, "name": "Jack Doe", "email": "jack.doe@example.com", "age": 24, "gender": "male"},
]

# ==========================
# Routes CRUD
# ==========================

@app.route("/students", methods=["GET"])
def get_students():
    """Retrieve all students with pagination"""
    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 10))
    start = (page - 1) * limit
    end = start + limit
    return jsonify({"students": students[start:end], "page": page, "limit": limit}), 200


@app.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    """Retrieve a student by ID"""
    student = next((s for s in students if s["id"] == student_id), None)
    return jsonify(student if student else None), 200


@app.route("/students", methods=["POST"])
def create_student():
    """Create a new student"""
    data = request.get_json()
    new_id = max(s["id"] for s in students) + 1 if students else 1
    new_student = {"id": new_id, **data}
    students.append(new_student)
    return jsonify(new_student), 201


@app.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    """Update an existing student"""
    student = next((s for s in students if s["id"] == student_id), None)
    if not student:
        return jsonify({"error": "Not found"}), 404
    data = request.get_json()
    student.update(data)
    return jsonify(student), 200


@app.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    """Delete a student"""
    global students
    student = next((s for s in students if s["id"] == student_id), None)
    if not student:
        return jsonify({"error": "Not found"}), 404
    students = [s for s in students if s["id"] != student_id]
    return jsonify(student), 200

# ==========================
# Gestion des erreurs
# ==========================

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(Exception)
def handle_exception(error):
    return jsonify({"error": "An error occurred", "message": str(error)}), 500

# ==========================
# Run app
# ==========================

if __name__ == "__main__":
    app.run(debug=True, port=5001)
