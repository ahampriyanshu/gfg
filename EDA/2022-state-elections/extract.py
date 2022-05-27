import pandas as pd
from urllib.request import urlopen
from bs4 import BeautifulSoup
from tabulate import tabulate


header = ['Party', 'Won', 'Leading', 'Total']
states = { 'Uttar-Pradesh' : 'S24', 'Goa' : 'S05', 'Mainpur' : 'S14', 'Punjab' : 'S19', 'Uttar-Khand' : 'S28' }


def extract(input_states):
    for state in input_states:
        print("Extracting data for", state, ":", input_states[state])
        try:
            url = "https://results.eci.gov.in/ResultAcGenMar2022/partywiseresult-" +  input_states[state] + ".htm"
            print("Fetching ", url)
            html = urlopen(url)
            soup = BeautifulSoup(html,'html.parser')
            body = soup.body
            div = body.find("div", {"id": "div1"})
            table = div.find("table",{"border":"1"})
            rows = table.find_all('tr')
            raw_data = []
            for i in range (3,len(rows)-1):
                tds = rows[i].findAll('td')
                raw_data.append([])
                for td in tds:
                    raw_data[len(raw_data)-1].append(td.text)
                raw_data[len(raw_data)-1][len(raw_data[len(raw_data)-1])-2] = int(raw_data[len(raw_data)-1][len(raw_data[len(raw_data)-1])-2])
            data = sorted(raw_data, key=lambda x: x[len(raw_data[0])-2],reverse=True)
            print("Data fetched successfully")
            print(tabulate(data, headers=header, tablefmt='fancy_grid'))
            df = pd.DataFrame(data = data, columns = header)
            filename = state + ".csv"
            print("Saving parsed data as", filename, end='\n\n')
            df.to_csv(filename, index=False)
        except e:
            print(e)


extract(states)