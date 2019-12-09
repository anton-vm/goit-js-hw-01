function formatString(string) {

    const finalString = string.length<40 ? string : `${string.split('').splice(0, 40).join('')}...`

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