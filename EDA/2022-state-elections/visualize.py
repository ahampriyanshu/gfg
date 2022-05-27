import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


header = ['Party', 'Won', 'Leading', 'Total']
states = { 'Uttar-Pradesh' : 'S24', 'Goa' : 'S05', 'Mainpur' : 'S14', 'Punjab' : 'S19', 'Uttar-Khand' : 'S28' }


def visualize(input_states):
    for state in input_states:
        print("Visualizing data for", state, ":", input_states[state])
        try:
            filename = state + ".csv"
            print("Importing", filename)
            csv_data = pd.read_csv(filename)
            csv_data = csv_data.groupby('Party')['Won'].sum().sort_values(ascending=False) 
            csv_data = csv_data.reset_index()
            csv_data.columns = ['Party' ,'Seats']
            print(csv_data)
            plt.figure(state)
            sns.barplot(data=csv_data, x='Party', y='Seats')
            print(plt.xticks(rotation=90))
            plt.pie(csv_data["Seats"], labels=csv_data["Party"])
            plt.axis('equal')
            print(plt.show())
        except e:
            print(e)


visualize(states)