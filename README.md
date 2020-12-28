Sentiment Analysis on Movie Review DataSet
===========================================
#Modules#

+ Data Processing
	1. Punctuation Removal
	2. Tokenization
	3. Lowercase convertion & POS tagging
	4. Final Processing
		+ Stopwords removal
		+ Only Words filter by isalpha()
		+ Only len(w)>2 filter
		+ Lemmatization
	5. Save data to ./logs/processedData.csv

+ Vocabolary & Modeling
	1. Vocabolary encoding by keras Tokenizer
	2. Sequence Padding
		+ MAX_SEQ_LEN=500
	3. Modeling by Keras LSTM network
	4. Saving Tokenizer & LSTM network in ./logs
		+ ./logs/tokenizer.json
		+ ./logs/model.h5

+ Deployment on Flask & Frontend
	1. Flusk app dev in backend_deployment.ipynb
		+ sentence processing pipeline
		+ flusk end point for get request with ?review=sentence
	2. FrontEnd web development in ./deplot-site
		+ index.html with empty dev for plotting
		+ myscript.js for backend query and plot with Plotly.js

+ Run Method
	1. Run flusk app in backend_deployment.ipynb
	2. Open index.html and write movie review

#################################################################
