import "D:/internship-project/src/css/driver/bankDetail.css";

export default function BankAccount(){
    return(
        <div className="main-bank-container">
        
            <div className="bank-container">
            <h1>Bank Details</h1>
            <br/>
                <form>
                    
                <label htmlFor="Institution">Institution Number</label>
                <input type="Institution" id="Institution" name="Institution" placeholder="029" required />
                <label htmlFor="Transit">Transit Number</label>
                <input type="Transit" id="Transit" name="Transit" placeholder="eg. 04536" required />
                <label htmlFor="Account">Account Number</label>
                <input type="Account" id="Account" name="Account" placeholder="eg. 4567389" required />
                <label htmlFor="Bank">Bank Name</label>
                <input type="Bank" id="Bank" name="Bank" placeholder="Royal Bank" required />
                <label htmlFor="Holder">Account Holder</label>
                <input type="Holder" id="Holder" name="Holder" placeholder="John deo" required />
                <button type="submit">Add / Edit </button>
                </form>
            </div>
        </div>
        
    )
}