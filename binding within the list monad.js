let bind = (list, func) => list.reduce((a, b) => (a.push(...func(b)), a), []);