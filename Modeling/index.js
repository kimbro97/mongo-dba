db.cafe.insertMany([
    {
        _id: 1,
        name: "IT Community",
        desc: "A Cafe where developer's share information.",
        created_at: ISODate("2018-08-09"),
        last_article: ISODate("2022-06-01T10:56:32.000Z"),
        level: 5,
        members: [
            {
                id: "tom93",
                first_name: "Tom",
                last_name: "Park",
                phone: "000-0000-1234",
                joined_at: ISODate("2018-09-12"),
                job: "DBA"
            },
            {
                id: "asddwd12",
                first_name: "Jenny",
                last_name: "Kim",
                phone: "000-0000-1111",
                joined_at: ISODate("2018-10-02"),
                job: "Frontend Dev"
            },
            {
                id: "candy12",
                first_name: "Zen",
                last_name: "Ko",
                phone: "000-0000-1233",
                joined_at: ISODate("2019-01-01"),
                job: "DA"
            }
        ]
    },
    {
        _id: 2,
        name: "Game Community",
        desc: "Share information about games.",
        created_at: ISODate("2020-01-23"),
        last_article: ISODate("2022-06-02T10:56:32.000Z"),
        level: 4,
        members: [
            {
                id: "tom93",
                first_name: "Tom",
                last_name: "Park",
                phone: "000-0000-1234",
                joined_at: ISODate("2020-09-12"),
                job: "DBA"
            },
            {
                id: "asddwd12",
                first_name: "Jenny",
                last_name: "Kim",
                phone: "000-0000-1111",
                joined_at: ISODate("2021-10-01"),
                job: "Frontend Dev"
            },
            {
                id: "java1",
                first_name: "Kevin",
                last_name: "Shin",
                phone: "000-0000-1133",
                joined_at: ISODate("2022-08-10"),
                job: "Game Dev"
            }
        ]
    },
]);