class CheckHomepage {
    checkMsg() {
        cy.get('[class="text-center"]').should('contain','ระบบได้ส่งรหัส OTP ไปยังเบอร์โทรศัพท์XX-XXXX-0001')
    }
}
export default new CheckHomepage