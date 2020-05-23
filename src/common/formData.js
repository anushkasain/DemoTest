export const getFormDataFromObject = (data) => {
    const formData = new FormData();
    for (var key in data)
    {
        if (typeof data[key] === 'object')
        {
            var dataValue = data[key];
            if (key == Constants.KEY_IMAGES)
            {
                for (var itemIndex in data[key])
                {
                    var keyName = Constants.KEY_IMAGES + itemIndex + Constants.KEY_ARRAY_CLOSE;
                    formData.append(keyName, data[key][itemIndex]);
                }
            }
           
            else
            {
                if (dataValue !== null && dataValue.uri !== undefined && dataValue.uri !== null)
                {
                }
                else
                {
                    if (dataValue != null)
                    {
                        dataValue = ((JSON.stringify(dataValue)));
                        dataValue = dataValue.replace(/\\/g, '');
                    }
                }
                if (dataValue != undefined && dataValue != null)
                {
                    formData.append(key, dataValue);
                }
            }
        }
        else
        {
           
            if (data[key] != undefined && data[key] != null)
            {
                formData.append(key, data[key]);
            }

        }
    }
    return formData;
}