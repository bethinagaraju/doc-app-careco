// // // import React from 'react';
// // // import { View, Text } from 'react-native';
// // // import tw from 'twrnc';
// // // import PageLayout from '../../components/PageLayout';

// // // const PersonalDetailsScreen = () => {
// // //   const name = 'John Doe';
// // //   const email = 'john.doe@example.com';
// // //   const phone = '123-456-7890';
// // //   const gender = 'Male';
// // //   const dob = '1990-01-01';
// // //   const address = '123 Main Street, New York';

// // //   return (
// // //     <PageLayout
// // //       title="Personal Details"
// // //       headerBackgroundColor="bg-green-600"
// // //       scrollable={true}
// // //     >
// // //       <View style={[tw`bg-green-50 rounded-xl p-4 mx-4`, { elevation: 1 }]}> 
// // //         <View style={tw`mb-4`}>
// // //           <Text style={tw`text-sm text-green-700`}>Full Name</Text>
// // //           <Text style={tw`text-base text-green-900 mt-1 font-medium`}>{name}</Text>
// // //         </View>

// // //         <View style={tw`mb-4`}>
// // //           <Text style={tw`text-sm text-green-700`}>Email</Text>
// // //           <Text style={tw`text-base text-green-900 mt-1 font-medium`}>{email}</Text>
// // //         </View>

// // //         <View style={tw`mb-4`}>
// // //           <Text style={tw`text-sm text-green-700`}>Phone</Text>
// // //           <Text style={tw`text-base text-green-900 mt-1 font-medium`}>{phone}</Text>
// // //         </View>

// // //         <View style={tw`mb-4`}>
// // //           <Text style={tw`text-sm text-green-700`}>Gender</Text>
// // //           <Text style={tw`text-base text-green-900 mt-1 font-medium`}>{gender}</Text>
// // //         </View>

// // //         <View style={tw`mb-4`}>
// // //           <Text style={tw`text-sm text-green-700`}>Date of Birth</Text>
// // //           <Text style={tw`text-base text-green-900 mt-1 font-medium`}>{dob}</Text>
// // //         </View>

// // //         <View style={tw`mb-4`}>
// // //           <Text style={tw`text-sm text-green-700`}>Address</Text>
// // //           <Text style={tw`text-base text-green-900 mt-1 font-medium`}>{address}</Text>
// // //         </View>
// // //       </View>
// // //     </PageLayout>
// // //   );
// // // };

// // // export default PersonalDetailsScreen;





// // import React, { useEffect, useState } from 'react';
// // import { View, Text, ActivityIndicator, Alert } from 'react-native';
// // import tw from 'twrnc';
// // import PageLayout from '../../components/PageLayout';

// // const PersonalDetailsScreen = () => {
// //   const [userData, setUserData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const fetchUserData = async () => {
// //     try {
// //       const response = await fetch('https://landing.docapp.co.in/api/auth/get-user-data', {
// //         method: 'GET',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           // include token if API requires authentication
// //           // 'Authorization': `Bearer ${token}`,
// //         },
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setUserData(data.userData);
// //       } else {
// //         Alert.alert('Error', data.message || 'Failed to fetch user data');
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       Alert.alert('Error', 'Something went wrong while fetching user data');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUserData();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <PageLayout title="Personal Details" headerBackgroundColor="bg-green-600">
// //         <View style={tw`flex-1 justify-center items-center`}>
// //           <ActivityIndicator size="large" color="#16a34a" />
// //           <Text style={tw`text-green-700 mt-2`}>Loading your details...</Text>
// //         </View>
// //       </PageLayout>
// //     );
// //   }

// //   if (!userData) {
// //     return (
// //       <PageLayout title="Personal Details" headerBackgroundColor="bg-green-600">
// //         <View style={tw`flex-1 justify-center items-center`}>
// //           <Text style={tw`text-red-500`}>No user data found</Text>
// //         </View>
// //       </PageLayout>
// //     );
// //   }

// //   const { username, email, phone_number, doctorProfile } = userData;
// //   const dob = doctorProfile?.date_of_birth
// //     ? new Date(doctorProfile.date_of_birth).toISOString().split('T')[0]
// //     : 'N/A';
// //   const gender = doctorProfile?.gender || 'N/A';
// //   const specialization = doctorProfile?.specialization || 'N/A';
// //   const experience = doctorProfile?.experience_years || 'N/A';

// //   return (
// //     <PageLayout
// //       title="Personal Details"
// //       headerBackgroundColor="bg-green-600"
// //       scrollable={true}
// //     >
// //       <View style={[tw`bg-green-50 rounded-xl p-4 mx-4`, { elevation: 1 }]}>
// //         <Detail label="Full Name" value={username} />
// //         <Detail label="Email" value={email} />
// //         <Detail label="Phone" value={phone_number} />
// //         <Detail label="Gender" value={gender} />
// //         <Detail label="Date of Birth" value={dob} />
// //         <Detail label="Specialization" value={specialization} />
// //         <Detail label="Experience (Years)" value={experience.toString()} />
// //       </View>
// //     </PageLayout>
// //   );
// // };

// // const Detail = ({ label, value }) => (
// //   <View style={tw`mb-4`}>
// //     <Text style={tw`text-sm text-green-700`}>{label}</Text>
// //     <Text style={tw`text-base text-green-900 mt-1 font-medium`}>
// //       {value || 'N/A'}
// //     </Text>
// //   </View>
// // );

// // export default PersonalDetailsScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, Alert, Image, ScrollView } from 'react-native';
// import tw from 'twrnc';
// import PageLayout from '../../components/PageLayout';

// const PersonalDetailsScreen = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch('https://landing.docapp.co.in/api/auth/get-user-data', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           // Include auth token if required:
//           // 'Authorization': `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUserData(data.userData);
//       } else {
//         Alert.alert('Error', data.message || 'Failed to fetch user data');
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Something went wrong while fetching user data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   if (loading) {
//     return (
//       <PageLayout title="Personal Details" headerBackgroundColor="bg-green-600">
//         <View style={tw`flex-1 justify-center items-center`}>
//           <ActivityIndicator size="large" color="#16a34a" />
//           <Text style={tw`text-green-700 mt-2`}>Loading your details...</Text>
//         </View>
//       </PageLayout>
//     );
//   }

//   if (!userData) {
//     return (
//       <PageLayout title="Personal Details" headerBackgroundColor="bg-green-600">
//         <View style={tw`flex-1 justify-center items-center`}>
//           <Text style={tw`text-red-500`}>No user data found</Text>
//         </View>
//       </PageLayout>
//     );
//   }

//   const { username, email, phone_number, role, is_email_verified, is_phone_verified, doctorProfile } = userData;

//   const dob = doctorProfile?.date_of_birth
//     ? new Date(doctorProfile.date_of_birth).toISOString().split('T')[0]
//     : 'N/A';
//   const gender = doctorProfile?.gender || 'N/A';
//   const specialization = doctorProfile?.specialization || 'N/A';
//   const experience = doctorProfile?.experience_years || 'N/A';
//   const licenseNumber = doctorProfile?.license_number || 'N/A';
//   const fee = doctorProfile?.consultation_fee || 'N/A';
//   const appointmentTime = doctorProfile?.appointment_time || 'N/A';
//   const verifiedStatus = doctorProfile?.verified_status ? 'Verified' : 'Not Verified';
//   const profilePic = doctorProfile?.profile_picture;

//   return (
//     <PageLayout
//       title="Personal Details"
//       headerBackgroundColor="bg-green-600"
//       scrollable={true}
//     >
//       <ScrollView contentContainerStyle={tw`pb-10`}>
//         <View style={tw`items-center mt-6`}>
//           {profilePic ? (
//             <Image
//               source={{ uri: profilePic }}
//               style={tw`w-32 h-32 rounded-full border-4 border-green-500`}
//               resizeMode="cover"
//             />
//           ) : (
//             <View
//               style={tw`w-32 h-32 rounded-full bg-green-200 justify-center items-center border-4 border-green-500`}
//             >
//               <Text style={tw`text-green-800 text-lg font-bold`}>No Image</Text>
//             </View>
//           )}
//           <Text style={tw`text-xl font-bold text-green-900 mt-3`}>{username}</Text>
//           <Text style={tw`text-sm text-green-700`}>{role?.toUpperCase()}</Text>
//         </View>

//         <View style={[tw`bg-green-50 rounded-xl p-4 mx-4 mt-6`, { elevation: 1 }]}>
//           <Detail label="Email" value={`${email} (${is_email_verified ? 'Verified' : 'Not Verified'})`} />
//           <Detail label="Phone" value={`${phone_number} (${is_phone_verified ? 'Verified' : 'Not Verified'})`} />
//           <Detail label="Gender" value={gender} />
//           <Detail label="Date of Birth" value={dob} />
//           <Detail label="Specialization" value={specialization} />
//           <Detail label="Experience (Years)" value={experience.toString()} />
//           <Detail label="License Number" value={licenseNumber} />
//           <Detail label="Consultation Fee" value={`₹${fee}`} />
//           <Detail label="Appointment Duration" value={`${appointmentTime} min`} />
//           <Detail label="Profile Status" value={verifiedStatus} />
//         </View>
//       </ScrollView>
//     </PageLayout>
//   );
// };

// const Detail = ({ label, value }) => (
//   <View style={tw`mb-4`}>
//     <Text style={tw`text-sm text-green-700`}>{label}</Text>
//     <Text style={tw`text-base text-green-900 mt-1 font-medium`}>
//       {value || 'N/A'}
//     </Text>
//   </View>
// );

// export default PersonalDetailsScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Image, ScrollView } from 'react-native';
import tw from 'twrnc';
import PageLayout from '../../components/PageLayout';

const PersonalDetailsScreen = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://landing.docapp.co.in/api/auth/get-user-data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add token if required
          // 'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUserData(data.userData);
      } else {
        Alert.alert('Error', data.message || 'Failed to fetch user data');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong while fetching user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <PageLayout title="Personal Details" headerBackgroundColor="bg-green-600">
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" color="#16a34a" />
          <Text style={tw`text-green-700 mt-2`}>Loading your details...</Text>
        </View>
      </PageLayout>
    );
  }

  if (!userData) {
    return (
      <PageLayout title="Personal Details" headerBackgroundColor="bg-green-600">
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-red-500`}>No user data found</Text>
        </View>
      </PageLayout>
    );
  }

  const {
    username,
    email,
    phone_number,
    role,
    is_email_verified,
    is_phone_verified,
    doctorProfile,
    generalUser,
  } = userData;

  // Determine if it's a doctor or general user
  const profileData = doctorProfile || generalUser || {};
  const dob = profileData.date_of_birth
    ? new Date(profileData.date_of_birth).toISOString().split('T')[0]
    : 'N/A';
  const gender = profileData.gender || 'N/A';
  const profilePic = profileData.profile_picture;

  // Doctor-specific details
  const specialization = doctorProfile?.specialization || null;
  const experience = doctorProfile?.experience_years || null;
  const licenseNumber = doctorProfile?.license_number || null;
  const fee = doctorProfile?.consultation_fee || null;
  const appointmentTime = doctorProfile?.appointment_time || null;
  const verifiedStatus = doctorProfile?.verified_status
    ? 'Verified'
    : doctorProfile
    ? 'Not Verified'
    : null;

  return (
    <PageLayout
      title="Personal Details"
      headerBackgroundColor="bg-green-600"
      scrollable={true}
    >bb
      <ScrollView contentContainerStyle={tw`pb-10`}>
        {/* Profile Section */}
        <View style={tw`items-center mt-6`}>
          {profilePic ? (
            <Image
              source={{ uri: profilePic }}
              style={tw`w-32 h-32 rounded-full border-4 border-green-500`}
              resizeMode="cover"
            />
          ) : (
            <View
              style={tw`w-32 h-32 rounded-full bg-green-200 justify-center items-center border-4 border-green-500`}
            >
              <Text style={tw`text-green-800 text-lg font-bold`}>No Image</Text>
            </View>
          )}
          <Text style={tw`text-xl font-bold text-green-900 mt-3`}>{username}</Text>
          <Text style={tw`text-sm text-green-700`}>{role?.toUpperCase()}</Text>
        </View>

        {/* Details Section */}
        <View style={[tw`bg-green-50 rounded-xl p-4 mx-4 mt-6`, { elevation: 1 }]}>
          <Detail
            label="Email"
            value={`${email} (${is_email_verified ? 'Verified' : 'Not Verified'})`}
          />
          <Detail
            label="Phone"
            value={`${phone_number} (${is_phone_verified ? 'Verified' : 'Not Verified'})`}
          />
          <Detail label="Gender" value={gender} />
          <Detail label="Date of Birth" value={dob} />

          {/* Doctor-specific info */}
          {role === 'doctor' && (
            <>
              <Detail label="Specialization" value={specialization} />
              <Detail
                label="Experience (Years)"
                value={experience?.toString() || 'N/A'}
              />
              <Detail label="License Number" value={licenseNumber} />
              <Detail
                label="Consultation Fee"
                value={fee ? `₹${fee}` : 'N/A'}
              />
              <Detail
                label="Appointment Duration"
                value={appointmentTime ? `${appointmentTime} min` : 'N/A'}
              />
              <Detail label="Profile Status" value={verifiedStatus} />
            </>
          )}
        </View>
      </ScrollView>
    </PageLayout>
  );
};

const Detail = ({ label, value }) => (
  <View style={tw`mb-4`}>
    <Text style={tw`text-sm text-green-700`}>{label}</Text>
    <Text style={tw`text-base text-green-900 mt-1 font-medium`}>
      {value || 'N/A'}
    </Text>
  </View>
);

export default PersonalDetailsScreen;
