import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import AnalysisChart from './AnalysisChart';
import AnalysisTable from './AnalysisTable';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AnalysisHero() {
    const [showAllSections, setShowAllSections] = useState(false);
    const [showAllQuantities, setShowAllQuantities] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Safely access event from location.state
    const event = location.state?.event || null;

    // Handle the case when event is not available
    if (!event) {
        return (
            <div className="container analysis-hero managewidth noEvenTo">
                <div className="row">
                    <div className="col-12">
                        <div className='noDetail'>
                        <p>No event details available. Please go back to the search page to select an event.</p>
                        <Button variant="contained" className='goToBtn' onClick={() => navigate('/search-area')}>
                            Go to Search
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const toggleSections = () => setShowAllSections(prevState => !prevState);
    const toggleQuantities = () => setShowAllQuantities(prevState => !prevState);
    const toggleFilter = () => setShowFilter(prevState => !prevState);

    return (
        <div className="container analysis-hero managewidth">
            <div className={`filterIcon ${showFilter ? 'active' : ''}`}>
                <IconButton onClick={toggleFilter}>
                    <FilterListIcon />
                </IconButton>
            </div>
            <div className="row">
                {(showFilter || window.innerWidth > 1200) && (
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mt-0 sideFilter">
                        <div className="filter-container">
                            <div className="filter">
                                <h4>Filter by Section</h4>
                                <div className="checkGroup">
                                    <input id="level119" className='form-check-input' type="checkbox" name="section" value="Lower Level 119" />
                                    <label htmlFor="level119">Lower Level 119</label>
                                </div>
                                <div className="checkGroup">
                                    <input id="level121" className='form-check-input' type="checkbox" name="section" value="Lower Level 121" />
                                    <label htmlFor="level121">Lower Level 121</label>
                                </div>
                                <div className="checkGroup">
                                    <input id="level122" className='form-check-input' type="checkbox" name="section" value="Lower Level 122" defaultChecked />
                                    <label htmlFor="level122">Lower Level 122</label>
                                </div>
                                {showAllSections && (
                                    <div className="checkGroup">
                                        <input id="level123" className='form-check-input' type="checkbox" name="section" value="Lower Level 123" />
                                        <label htmlFor="level123">Lower Level 123</label>
                                    </div>
                                )}
                                <a
                                    href="#"
                                    className='seeMoreBtn'
                                    onClick={toggleSections}
                                    aria-expanded={showAllSections}
                                    aria-controls="section-filters"
                                >
                                    {showAllSections ? 'See Less' : 'See More'}
                                </a>
                                <h4 className='pt-2'>Filter by Quantity</h4>
                                <div className="checkGroup">
                                    <input id="quantity1" className='form-check-input' type="checkbox" name="quantity" value="1" />
                                    <label htmlFor="quantity1">1 Ticket</label>
                                </div>
                                <div className="checkGroup">
                                    <input id="quantity2" className='form-check-input' type="checkbox" name="quantity" value="2" />
                                    <label htmlFor="quantity2">2 Tickets</label>
                                </div>
                                <div className="checkGroup">
                                    <input id="quantity3" className='form-check-input' type="checkbox" name="quantity" value="3" defaultChecked />
                                    <label htmlFor="quantity3">3 Tickets</label>
                                </div>
                                <div className="checkGroup">
                                    <input id="quantity4" className='form-check-input' type="checkbox" name="quantity" value="4" />
                                    <label htmlFor="quantity4">4 Tickets</label>
                                </div>
                                <div className="checkGroup">
                                    <input id="quantity5" className='form-check-input' type="checkbox" name="quantity" value="5" />
                                    <label htmlFor="quantity5">+5 Tickets</label>
                                </div>
                                {showAllQuantities && (
                                    <div className="checkGroup">
                                        <input id="quantity6" className='form-check-input' type="checkbox" name="quantity" value="6" />
                                        <label htmlFor="quantity6">6 Tickets</label>
                                    </div>
                                )}
                                <a
                                    href="#"
                                    className='seeMoreBtn mb-0'
                                    onClick={toggleQuantities}
                                    aria-expanded={showAllQuantities}
                                    aria-controls="quantity-filters"
                                >
                                    {showAllQuantities ? 'See Less' : 'See More'}
                                </a>
                                <Button variant='contained' className="apply-filter-btn">Apply Filter</Button>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`col-xl-${showFilter ? '9' : '9'} col-lg-12 mt-xl-0 mt-0`}>
                    <AnalysisChart event={event} />
                </div>
            </div>
            <AnalysisTable />
        </div>
    );
}
