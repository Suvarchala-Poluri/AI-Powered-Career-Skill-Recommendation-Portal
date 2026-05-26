import pickle

model = pickle.load(open('model.pkl', 'rb'))

sample = [[1, 1, 1]]

prediction = model.predict(sample)

print(prediction)
