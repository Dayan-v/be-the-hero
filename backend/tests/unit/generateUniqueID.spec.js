const genarateUniqueID = require('../../src/utils/generateUniqueID');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = genarateUniqueID();

    expect(id).toHaveLength(8);
  })
})