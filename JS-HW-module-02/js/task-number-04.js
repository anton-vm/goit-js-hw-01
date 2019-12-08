function formatString(string) {
    let finalString
    if (string.length <40) {
        finalString = string
    } else {
      const stringForty = string.split('').splice(0, 40).join('')
      finalString = `${stringForty}...`
      console.log(finalString);

    }
return finalString
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );