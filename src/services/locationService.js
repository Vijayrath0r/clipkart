// src/locationService.js
import '../../public/js/jquery-3.7.1';

export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let lat = position.coords.latitude;
                    let long = position.coords.longitude;
                    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyCnD` + `13wQBFt56` + `BL9LmSkIVQr` + `2m6Gdyvza8`;

                    $.ajax({
                        type: "GET",
                        url: url,
                        dataType: "json",
                        success: function (response) {
                            let results = response.results;
                            resolve(results[0]);
                        },
                        error: function (req, status, error) {
                            reject('Sorry, there was an error.');
                        }
                    });
                },
                (error) => {
                    let errorMessage = '';
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "User denied the request for Geolocation.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "Location information is unavailable.";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "The request to get user location timed out.";
                            break;
                        case error.UNKNOWN_ERROR:
                            errorMessage = "An unknown error occurred.";
                            break;
                    }
                    reject(errorMessage);
                }
            );
        } else {
            reject("Sorry, Geolocation is not supported by your browser.");
        }
    });
};
