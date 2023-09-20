import difflib
from flask import Flask, request, jsonify

def calculate_plagiarism_percentage(text1, text2):
    # Split text into lines for comparison
    lines1 = text1.splitlines()
    lines2 = text2.splitlines()

    # Calculate the similarity ratio
    similarity = difflib.SequenceMatcher(None, lines1, lines2).ratio()

    # Convert similarity to percentage
    plagiarism_percentage = similarity * 100

    return plagiarism_percentage

app = Flask(__name__)

@app.route('/check-plagiarism', methods=['POST'])
def check_plagiarism():
    data = request.get_json()
    uploaded_text = data.get('text')
    
    # Load the keywords text from keywords.txt
    with open('keywords.txt', 'r') as keywords_file:
        keywords_text = keywords_file.read()

    plagiarism_percentage = calculate_plagiarism_percentage(uploaded_text, keywords_text)

    return jsonify({'plagiarismPercentage': plagiarism_percentage})

if __name__ == '__main__':
    app.run()
