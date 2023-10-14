exports.difficultyLevelOptionsViewData = (difficultyLevel) => {
    const titles = [
        "1 - Very Easy",
        "2 - Easy",
        "3 - Medium (Standard 3x3)",
        "4 - Intermediate",
        "5 - Expert",
        "6 - Hardcore",
    ];
    const options = titles.map((title, index) => {
        const indexValue = index + 1;
        return {
            title,
            value: indexValue,
            selected: Number(difficultyLevel) === indexValue,
        };
    });
    return options;
};
