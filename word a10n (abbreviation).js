let abbreviate = string => string.replace(/\B\w{2,}\B/g, match => match.length);