import pandas as pd

existing_excel_file = 'data.xlsx'
def add_data_to_excel(existing_excel_file, new_data):
    # Read the existing Excel file
    try:
        df = pd.read_excel(existing_excel_file)
    except FileNotFoundError:
        # If the file doesn't exist, create a new DataFrame
        df = pd.DataFrame()

    # Append the new data to the DataFrame
    df = df.append(new_data, ignore_index=True)

    # Save the updated DataFrame back to the Excel file
    df.to_excel(existing_excel_file, index=False, engine='openpyxl')


new_data = {'Column1': [value1, value2], 'Column2': [value3, value4]}
add_data_to_excel(existing_excel_file, new_data)
