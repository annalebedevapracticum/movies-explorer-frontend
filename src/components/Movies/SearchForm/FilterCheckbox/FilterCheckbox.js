import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox({ label, onChange, checked }) {
    return (
        <div>
            <label class="checkbox">
                <span>{label}</span>
                <input type="checkbox"  class="checkbox__filter" onChange={onChange} checked={checked} />
                <span class="checkbox__filter-switch"></span>
            </label>
        </div>

    )
}

export default FilterCheckbox;