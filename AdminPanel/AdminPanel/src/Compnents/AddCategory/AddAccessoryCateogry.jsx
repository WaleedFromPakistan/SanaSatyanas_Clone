import React from 'react';
import './AddAccessoryCategory.css';
const AddAccessoryCateogry = () => {
    return (
        <div className='add-category'>
            <h1>Add New Category</h1>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="cateogry" class="form-label">Category Name</label><span>*</span>
                    <input type="text" class="form-control" id="validationCustom01" value="" required/>
                       
                </div>
                <div class="col-md-4">
                    <label for="sub_category" class="form-label">Sub Category</label><span>*</span>
                    <input type="text" class="form-control" id="validationCustom02" value="Otto" required/>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div class="col-md-4">
                    <label for="sub_category_background_img" class="form-label">Background Image</label><span>*</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                </div>
                <div class="col-md-6">
                    <label for="description" class="form-label">Sub Category Description</label>
                    <textarea type="" class="form-control" id="validationCustom03" />
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">State</label>
                    <select class="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="validationCustom05" required/>
                        <div class="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
}

export default AddAccessoryCateogry;
