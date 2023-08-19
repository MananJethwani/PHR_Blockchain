
import CustomAvatar from "./Common/Avatar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function UserProfile() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const user = localStorage.getItem('user');
    const profile = localStorage.getItem('profile');

    return (
        <div className='box pt-10'>

            <Box className="side-box">
                <Box sx={{ marginTop: '-200px', marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CustomAvatar initials='Varisha Rashid' />

                    <Typography variant="h5">{user}</Typography>
                </Box>
                <Typography variant="h5"> Profile: {profile}</Typography>

            </Box>
            <div className='profile-box'>
                <div className="card pt-5">
                    <div className="card-body">
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mb-2 text-primary">Personal Details</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="eMail">Email</label>
                                    <input type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="website">Website URL</label>
                                    <input type="url" className="form-control" id="website" placeholder="Website url" />
                                </div>
                            </div>
                        </div>
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 className="mt-3 mb-2 text-primary">Address</h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="Street">Street</label>
                                    <input type="name" className="form-control" id="Street" placeholder="Enter Street" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="ciTy">City</label>
                                    <input type="name" className="form-control" id="ciTy" placeholder="Enter City" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="sTate">State</label>
                                    <input type="text" className="form-control" id="sTate" placeholder="Enter State" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="zIp">Zip Code</label>
                                    <input type="text" className="form-control" id="zIp" placeholder="Zip Code" />
                                </div>
                            </div>
                        </div>
                        <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                    <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
                                    <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}