let meeting = s => s.split(';').map(x => x.toUpperCase().split(':').reverse().join(', ')).sort().map(x => '(' + x + ')').join('');