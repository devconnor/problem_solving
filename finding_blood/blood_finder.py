
def finder(filepath):
    infile = open(filepath, "r")
    context = infile.read()
    patients = context.split("\n\n")
    print(patients)
    data = []

    for item in patients:
        pat = item.split("\n")
        data.append(pat)

    final_database = []
    for lst in data:
        temp_dict = {}
        for key_val in lst:
            temp_lst = key_val.split(": ")
            key = temp_lst[0]
            val = temp_lst[1]
            temp_dict[key] = val
        final_database.append(temp_dict)

    print(final_database)

    results = []
    for i in final_database:
        if i["Blood-Type"] == "O+":
            results.append(i)

    print("Hey This is the result: %s" % results)
    outfile = open("results.txt", "w")
    for i in results:
        for key in i:
            outfile.write("%s: %s\n" % (key, i[key]))
        outfile.write("\n\n")
finder("database.txt")
