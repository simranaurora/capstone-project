import { useState } from 'react';

const Profile = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        bio: '',
        profilePhoto: null,
    });

   

    return (
        <div style={styles.container}>
            <h2>Profile</h2>
            <form  style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="profilePhoto">Profile Photo:</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        //onChange={handleChange}
                        style={styles.input}
                    />
                    
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                      //  onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        //onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                       // onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                       // onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                      //  onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                       // onChange={handleChange}
                        style={styles.textarea}
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        height: '100px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#4a90e2',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        marginTop: '10px',
    },
    profileImage: {
        marginTop: '10px',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
    },
};

export default Profile;
