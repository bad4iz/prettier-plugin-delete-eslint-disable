const sum = (a, b) => a + b

describe('🐛 spec default.test', () => {
  it('🧪 default', () => {
    expect.hasAssertions()
    // ☣️  Arrange (всякие моки)

    // 🧹 clear mock

    //🔥 Act
    const res = sum(1, 2)

    //❓ Assert
    expect(res).toBe(3)
  })
})
