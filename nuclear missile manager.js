function launchAll(launchMissile) {
    for (let i = 0; i < 5; i++) setTimeout((i => () => launchMissile(i))(i), i * 1000);
}