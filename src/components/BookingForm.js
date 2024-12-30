import React, {useState} from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [ocassion, setOcassion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </div>

                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id="book-item" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value="">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor='book-guests'>Number of Guests: </label>
                        <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor='book-ocassion'>Ocassion:</label>
                        <select id="book-ocassion" key={ocassion} value={ocassion} onChange={(e) => setOcassion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <div className='btnReceive'>
                            <input aria-label='On click' type='submit' value={'Make your Reservation'}/>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm