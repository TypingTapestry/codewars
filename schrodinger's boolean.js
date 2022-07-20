let omnibool = {
    valueOf: () => {
      omnibool.valueOf = () => false;
      return true;
    }
}