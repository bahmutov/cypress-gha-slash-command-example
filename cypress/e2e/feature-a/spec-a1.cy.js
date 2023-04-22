describe('Feature A', { tags: '@featureA' }, () => {
  it('works 1', { tags: '@sanity' }, () => {
    cy.wait(15_000)
  })

  it('works 2', () => {
    cy.wait(15_000)
  })
})
