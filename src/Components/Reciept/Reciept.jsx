import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '@/Constant';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useContext } from 'react';
import { UserContext } from '@/Contexts/UserContext';



const styles = StyleSheet.create({
     page: {
       padding: 40,
       fontFamily: 'Helvetica',
       backgroundColor: '#f9fafb',
     },
     header: {
       textAlign: 'center',
       marginBottom: 30,
     },
     heading: {
       fontSize: 24,
       fontWeight: 'bold',
       color: '#1f2937',
       marginBottom: 5,
     },
     subHeading: {
       fontSize: 14,
       color: '#6b7280',
     },
     section: {
       marginBottom: 20,
       padding: 20,
       backgroundColor: '#ffffff',
       borderRadius: 8,
       border: '1px solid #e5e7eb',
     },
     sectionHeader: {
       fontSize: 18,
       fontWeight: 'bold',
       color: '#374151',
       marginBottom: 10,
     },
     row: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginBottom: 8,
     },
     label: {
       fontSize: 12,
       fontWeight: 'bold',
       color: '#4b5563',
     },
     value: {
       fontSize: 12,
       color: '#1f2937',
     },
     passengerItem: {
       marginBottom: 8,
     },
     divider: {
       borderBottomWidth: 1,
       borderBottomColor: '#e5e7eb',
       marginVertical: 10,
     },
   });
   
   const Receipt = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState(null);
     const { user } = useContext(UserContext);
   
     useEffect(() => {
       const fetchBooking = async () => {
         try {
           const response = await fetchApi(`api/bookings/${id}`, 'GET');
           setBooking(response.data);
         } catch (error) {
           console.error('Error fetching booking:', error);
         }
       };
   
       fetchBooking();
     }, [id]);
   
     if (!booking) {
       return (
         <div className="flex items-center justify-center h-screen">
           <p className="text-gray-600">Loading...</p>
         </div>
       );
     }
   
     const BookingDocument = () => (
       <Document>
         <Page style={styles.page}>
           <View style={styles.header}>
             <Text style={styles.heading}>Travel Receipt</Text>
             <Text style={styles.subHeading}>Thank you for booking with Vista!</Text>
           </View>
   
           <View style={styles.section}>
             <Text style={styles.sectionHeader}>Booking Details</Text>
             <View style={styles.row}>
               <Text style={styles.label}>Package:</Text>
               <Text style={styles.value}>{booking.package?.title}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>Price:</Text>
               <Text style={styles.value}>₹{booking.package?.price}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>Total Price:</Text>
               <Text style={styles.value}>₹{booking.totalPrice}</Text>
             </View>
           </View>
   
           <View style={styles.section}>
             <Text style={styles.sectionHeader}>Customer Information</Text>
             <View style={styles.row}>
               <Text style={styles.label}>Booked By:</Text>
               <Text style={styles.value}>{user?.email}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>Email:</Text>
               <Text style={styles.value}>{booking.email}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>Phone Number:</Text>
               <Text style={styles.value}>{booking.phoneNumber}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>Booking On:</Text>
               <Text style={styles.value}>{new Date(booking.date).toLocaleDateString()}</Text>
             </View>
           </View>
   
           <View style={styles.section}>
             <Text style={styles.sectionHeader}>Additional Information</Text>
             <View style={styles.row}>
               <Text style={styles.label}>Travelers:</Text>
               <Text style={styles.value}>{booking.travelers}</Text>
             </View>
             <View style={styles.row}>
               <Text style={styles.label}>Special Requests:</Text>
               <Text style={styles.value}>{booking.specialRequests || 'None'}</Text>
             </View>
             <Text style={styles.label}>Passenger Details:</Text>
             <View style={styles.divider} />
             {booking.passenger.map((p, index) => (
               <View key={index} style={styles.passengerItem}>
                 <Text style={styles.value}>
                   {index + 1}. {p.name}, {p.gender}, {p.age} years old
                 </Text>
               </View>
             ))}
           </View>
         </Page>
       </Document>
     );
   
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Receipt</h1>
        <hr className="border-gray-300 my-4" />
        <ul className="space-y-4">
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Package:</span>
              <span className="text-gray-800">{booking.package?.title}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Price:</span>
              <span className="text-gray-800">₹{booking.package?.price}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Total Price:</span>
              <span className="text-gray-800">₹{booking.totalPrice}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Email:</span>
              <span className="text-gray-800">{booking.email}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Phone Number:</span>
              <span className="text-gray-800">{booking.phoneNumber}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Booking On:</span>
              <span className="text-gray-800">{new Date(booking.date).toLocaleDateString()}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Travelers:</span>
              <span className="text-gray-800">{booking.travelers}</span>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">Special Requests:</span>
              <span className="text-gray-800">{booking.specialRequests || 'None'}</span>
            </div>
          </li>
        </ul>
        <hr className="border-gray-300 my-4" />
        <h2 className="text-lg font-bold text-gray-800 mb-4">Passenger Details:</h2>
        <ul className="space-y-3">
          {booking.passenger.map((p, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-gray-800 font-semibold">
                {index + 1}. {p.name}
              </span>
              <span className="text-gray-600">
                {p.gender}, {p.age} years old
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4 mt-6">

          <PDFDownloadLink document={<BookingDocument />} fileName="receipt.pdf">
            {({ loading }) => (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
              >
                {loading ? 'Loading document...' : 'Download PDF'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
