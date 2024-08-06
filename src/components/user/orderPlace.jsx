import React, { useState, useEffect } from 'react';
import UserHeader from './userHeader';
import { useNavigate } from 'react-router-dom';
import ServiceViewImage from "D:/internship-project/src/assets/service.png";
import "D:/internship-project/src/css/user/orderPlace.css";
import "D:/internship-project/src/css/user/editAddress.css";
import "D:/internship-project/src/css/user/paymetCard.css"; // Assuming you put the payment card styles in this file

export default function OrderPlace() {
    const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [dialogbox, setDialogBox] = useState(false);
    const [paymentDialog, setPaymentDialog] = useState(false);
    const [addresses, setAddresses] = useState([
        { id: 1, line1: '3262, Sandwich St, 112', line2: 'Windsor, Ontario NPC 1A8' },
        { id: 2, line1: '1123, Sandwich St, 101', line2: 'Windsor, Ontario NPC 1A8' },
        { id: 3, line1: '5678, Marry St', line2: 'Windsor, Ontario N9V 1Z9' },
        { id: 4, line1: '199, Bruce St', line2: 'Windsor, Ontario NPC 1A8' },
        { id: 5, line1: '300, Ouellette St', line2: 'Windsor, Ontario N4F 1A7' }
    ]);
    const [searchInput, setSearchInput] = useState('');
    const [total, setTotal] = useState(0);

    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const [creditCardDetails, setCreditCardDetails] = useState({
        cardNumber: '',
        expDate: '',
        securityCode: '',
        country: 'Canada',
        zipCode: '',
        nickname: ''
    });

    const [debitCardDetails, setDebitCardDetails] = useState({
        cardNumber: '',
        expDate: '',
        securityCode: '',
        country: 'Canada',
        zipCode: '',
        nickname: ''
    });

    const [isCreditCardAdded, setIsCreditCardAdded] = useState(false);
    const [isDebitCardAdded, setIsDebitCardAdded] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/api/cart/getiteam/?userId=${userId}`)
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.cartItems)) {
                    setCartItems(data.cartItems);
                    setTotal(Number(data.total) || 0); // Ensure total is a number
                } else {
                    console.error('Expected cartItems to be an array but got:', data);
                    setCartItems([]);
                    setTotal(0); // Fallback value
                }
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
                setCartItems([]);
                setTotal(0); // Fallback value
            });
    }, [userId]);


    const handleCheckout = () => {
        // const checkoutData = {
        //     "services": [
        //         { "serviceId": "66a951017d4a41544d6c3071", "quantity": 1 },
        //        { "serviceId": "66a951017d4a41544d6c3072", "quantity": 1 }
       
        //    ],
        //    "userId": "666a117d674122300600acb2",
        //    "userAddress": "123 Main St, Springfield, IL, 62701",
        //    "deliveryOption": "priority",
        //    "paymentDetails": {
        //        "cardNumber": "1234567812345678",
        //        "cvv": "123",
        //        "expiry": "12/24",
        //        "county": "SomeCounty",
        //        "zip": "12345",
        //        "nickName": "MyCard"
        //    }
        // }
        const checkoutData = {
            services: cartItems.map(item => ({
                serviceId: item.service._id,
                quantity: item.quantity
            })),
            userId: userId,
            userAddress: selectedAddress ? `${selectedAddress.line1}, ${selectedAddress.line2}` : '',
            deliveryOption: selectedDeliveryOption,
            paymentDetails: selectedPaymentOption === 'credit-card' ? {
                cardNumber: creditCardDetails.cardNumber,
                cvv: creditCardDetails.securityCode,
                expiry: creditCardDetails.expDate,
                country: creditCardDetails.country,
                zip: creditCardDetails.zipCode,
                nickName: creditCardDetails.nickname
            } : {
                cardNumber: debitCardDetails.cardNumber,
                cvv: debitCardDetails.securityCode,
                expiry: debitCardDetails.expDate,
                country: debitCardDetails.country,
                zip: debitCardDetails.zipCode,
                nickName: debitCardDetails.nickname
            }
        };

        fetch('http://localhost:5000/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkoutData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Checkout successful:', data);
            })
            .catch(error => {
                console.error('Error during checkout:', error);

            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCheckout()
        navigate(`/thanku`);
    };
    const editAddress = () => {
        setDialogBox(true);
        document.querySelector('.order-place-content').classList.add('blur-background');
    };

    const closeDialog = () => {
        setDialogBox(false);
        document.querySelector('.order-place-content').classList.remove('blur-background');
    };

    const openPaymentDialog = () => {
        setPaymentDialog(true);
        document.querySelector('.order-place-content').classList.add('blur-background');
    };

    const closePaymentDialog = () => {
        setPaymentDialog(false);
        document.querySelector('.order-place-content').classList.remove('blur-background');
    };

    const filterAddresses = (event) => {
        setSearchInput(event.target.value.toLowerCase());
    };

    const selectDeliveryOption = (option) => {
        setSelectedDeliveryOption(option);
    };

    const selectPaymentOption = (option) => {
        setSelectedPaymentOption(option);
        openPaymentDialog();
    };

    const handleAddressSelect = (address) => {
        setSelectedAddress(address);
        console.log(setAddresses);
        closeDialog();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (selectedPaymentOption === 'credit-card') {
            setCreditCardDetails((prevDetails) => ({
                ...prevDetails,
                [id]: value
            }));
        } else if (selectedPaymentOption === 'debit-card') {
            setDebitCardDetails((prevDetails) => ({
                ...prevDetails,
                [id]: value
            }));
        }
    };

    const handleAddCard = () => {
        if (selectedPaymentOption === 'credit-card') {
            setIsCreditCardAdded(true);
        } else if (selectedPaymentOption === 'debit-card') {
            setIsDebitCardAdded(true);
        }
        closePaymentDialog();
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <UserHeader id={userId} />
            <div className="order-place-content">
                <div className="bodytag">
                    <div className="container9">
                        <div className="left9">
                            <div className="section9">
                                <h2>Delivery Details</h2>
                                <div className="card9">
                                    <div className="extra">
                                        <i className="fa fa-map-marker" id="icon9" aria-hidden="true"></i>
                                        <div>
                                            <p className="title">Address First Line</p>
                                            <p>{selectedAddress ? `${selectedAddress.line1}, ${selectedAddress.line2}` : 'No address selected'}</p>
                                        </div>
                                    </div>
                                    <button className="editbutton" onClick={editAddress}>Edit</button>
                                </div>
                            </div>
                            <div className="section9">
                                <h2>Delivery Options</h2>
                                <div
                                    className={`card9 ${selectedDeliveryOption === 'priority' ? 'selected' : ''}`}
                                    onClick={() => selectDeliveryOption('priority')}
                                >
                                    <div className="extra">
                                        <i className="fa fa-level-up" id="icon9" aria-hidden="true"></i>
                                        <div>
                                            <p className="title">Priority</p>
                                            <p>Same Day</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`card9 ${selectedDeliveryOption === 'standard' ? 'selected' : ''}`}
                                    onClick={() => selectDeliveryOption('standard')}
                                >
                                    <div className="extra">
                                        <i className="fa fa-level-up" id="icon9" aria-hidden="true"></i>
                                        <div>
                                            <p className="title">Standard</p>
                                            <p>Next Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section9">
                                <h2>Payment</h2>
                                <div
                                    className={`card9 ${selectedPaymentOption === 'credit-card' ? 'selected' : ''}`}
                                    onClick={() => selectPaymentOption('credit-card')}
                                >
                                    <div className="extra">
                                        <i className="fa fa-credit-card" id="icon9" aria-hidden="true"></i>
                                        <div>
                                            <p className="title">Credit Card</p>
                                            {isCreditCardAdded ? (
                                                <p>{creditCardDetails.cardNumber}</p>
                                            ) : (
                                                <p>Credit Card Details</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`card9 ${selectedPaymentOption === 'debit-card' ? 'selected' : ''}`}
                                    onClick={() => selectPaymentOption('debit-card')}
                                >
                                    <div className="extra">
                                        <i className="fa fa-credit-card-alt" id="icon9" aria-hidden="true"></i>
                                        <div>
                                            <p className="title">Debit Card</p>
                                            {isDebitCardAdded ? (
                                                <p>{debitCardDetails.cardNumber}</p>
                                            ) : (
                                                <p>Debit Card Details</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right9">
                            <div className="section9">
                                <div className="card10">
                                    <img src={ServiceViewImage} alt="Service" />
                                    <div>
                                        {cartItems.length > 0 ? (
                                            <>
                                                <p className="title">{cartItems[0].service.providerName}</p>
                                                <p>{cartItems[0].service.providerAddress}</p>
                                            </>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                        {/* <p>Address</p> */}
                                    </div>
                                </div>
                                <button className="place-order-button" onClick={handleSubmit}>Place order</button>
                            </div>
                            <br />
                            <div className="section9">
                                <h2>Cart summary</h2>
                                <div className="card10" onClick={handleToggleDropdown}>
                                    <img src={ServiceViewImage} alt="Service" />
                                    <div>
                                        <p className="title">Total Service</p>
                                        <p>{cartItems.length}</p>
                                    </div>
                                </div>
                                <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                    <table className="service-table">
                                        <thead>
                                            <tr className="service-table-header-row">
                                                <th className="service-table-header-cell">
                                                    Service Name
                                                </th>
                                                <th className="service-table-header-cell">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((service, index) => (
                                                <tr key={index} className="service-table-row">
                                                    <td className="service-table-cell">
                                                        {service.service.name}
                                                    </td>
                                                    <td className="service-table-cell">
                                                        {service.service.price}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="order-total9">
                                    <p>Subtotal</p>
                                    <p>${total}</p>
                                </div>
                                <div className="order-total9">
                                    <p>Delivery Fees</p>
                                    <p>$6.99</p>
                                </div>
                                <div className="order-total9">
                                    <p>Taxes & Other Fees</p>
                                    <p>${(total * 0.13).toFixed(2)}</p>
                                    </div>
                                <div className="order-total9 total">
                                    <p>Total</p>
                                    <p>${total*0.13 + total + 6.99}</p>
                                </div>
                                <div className="alish">
                                    <p>
                                        If you're not around when the delivery
                                        person arrives, they'll leave your order
                                        at the door. By placing your order, you
                                        agree to take full responsibility for it
                                        once it's delivered.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {dialogbox && (
                <dialog id="address-dialog" className="dialog-box2" open>
                    <div className="container-address">
                        <div className="header-address">
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Addresses"
                                value={searchInput}
                                onChange={filterAddresses}
                            />
                            <span className="close-btn" onClick={closeDialog}>
                                &times;
                            </span>
                        </div>
                        <div className="list-address" id="addressList">
                            {addresses
                                .filter(
                                    (address) =>
                                        address.line1
                                            .toLowerCase()
                                            .includes(searchInput) ||
                                        address.line2
                                            .toLowerCase()
                                            .includes(searchInput)
                                )
                                .map((address) => (
                                    <div
                                        className="list-item-address"
                                        key={address.id}
                                        onClick={() =>
                                            handleAddressSelect(address)
                                        }
                                    >
                                        <i
                                            className="fa fa-map-marker"
                                            aria-hidden="true"
                                        ></i>
                                        <div className="address-info-address">
                                            <span>{address.line1}</span>
                                            <span className="secondary">
                                                {address.line2}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </dialog>
            )}
            {paymentDialog && (
                <dialog id="payment-dialog" className="body-payment-card" open>
                    <div className="container-payment-card">
                        <div className="header-payment-card">
                            <h2>Add credit or debit card</h2>
                            <span
                                className="close-btn"
                                onClick={closePaymentDialog}
                            >
                                &times;
                            </span>
                        </div>
                        <form>
                            <div className="form-group-payment-card">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    placeholder="Card Number"
                                    value={selectedPaymentOption === 'credit-card' ? creditCardDetails.cardNumber : debitCardDetails.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group-payment-card two-columns">
                                <div className="form-group-payment-card">
                                    <label htmlFor="expDate">Exp. Date</label>
                                    <input
                                        type="text"
                                        id="expDate"
                                        placeholder="MM/YY"
                                        value={selectedPaymentOption === 'credit-card' ? creditCardDetails.expDate : debitCardDetails.expDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group-payment-card">
                                    <label htmlFor="securityCode">
                                        Security Code
                                    </label>
                                    <input
                                        type="text"
                                        id="securityCode"
                                        placeholder="CVV"
                                        value={selectedPaymentOption === 'credit-card' ? creditCardDetails.securityCode : debitCardDetails.securityCode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group-payment-card">
                                <label htmlFor="country">Country</label>
                                <select
                                    id="country"
                                    value={selectedPaymentOption === 'credit-card' ? creditCardDetails.country : debitCardDetails.country}
                                    onChange={handleInputChange}
                                >
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>
                            <div className="form-group-payment-card">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    placeholder="Zip Code"
                                    value={selectedPaymentOption === 'credit-card' ? creditCardDetails.zipCode : debitCardDetails.zipCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group-payment-card">
                                <label htmlFor="nickname">
                                    Nickname (optional)
                                </label>
                                <input
                                    type="text"
                                    id="nickname"
                                    placeholder="e.g. joint account or work card"
                                    value={selectedPaymentOption === 'credit-card' ? creditCardDetails.nickname : debitCardDetails.nickname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="buttons-payment-card">
                                <button
                                    type="button"
                                    className="add-card-btn"
                                    onClick={handleAddCard}
                                >
                                    Add Card
                                </button>
                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={closePaymentDialog}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
        </>
    );
}
