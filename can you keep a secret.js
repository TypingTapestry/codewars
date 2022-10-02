function createSecretHolder(secret) {
    return {
      getSecret: () => secret,
      setSecret: sec => secret = sec
    };
}