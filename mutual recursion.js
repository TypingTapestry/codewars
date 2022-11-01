let F = n => n ? n - M(F(n - 1)) : 1;

let M = n => n && n - F(M(n - 1));