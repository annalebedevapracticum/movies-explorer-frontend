import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox({ label, onChange, checked }) {
    return (
        <div>
            <label className="checkbox">
                <span>{label}</span>
                <input type="checkbox"  className="checkbox__filter" onChange={onChange} checked={checked} />
                <span className="checkbox__filter-switch"></span>
            </label>
        </div>

    )
}

export default FilterCheckbox;