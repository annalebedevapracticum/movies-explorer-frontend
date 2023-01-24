import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox({ label, onChange, checked }) {
    return (
        <div>
            <label class="checkbox-ios">
                <span>{label}</span>
                <input type="checkbox"  class="checkbox" onChange={onChange} checked={checked} />
                <span class="checkbox-ios-switch"></span>
            </label>
        </div>

    )
}

export default FilterCheckbox;