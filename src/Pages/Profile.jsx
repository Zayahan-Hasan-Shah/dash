import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      {/* Account page navigation */}
      <nav className="flex space-x-4 border-b border-gray-300 pb-4">
        <a className="text-blue-500 font-medium" href="account-profile.html">Profile</a>
        <a className="text-gray-600 hover:text-blue-500" href="account-billing.html">Billing</a>
        <a className="text-gray-600 hover:text-blue-500" href="account-security.html">Security</a>
        <a className="text-gray-600 hover:text-blue-500" href="account-notifications.html">Notifications</a>
      </nav>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4">
        {/* Profile picture card */}
        <div className="col-span-1">
          <div className="card bg-white shadow rounded-lg mb-4">
            <div className="card-header p-4 border-b border-gray-200">Profile Picture</div>
            <div className="card-body text-center p-4">
              {/* Profile picture image */}
              <img
                className="rounded-full w-32 h-32 mx-auto mb-4"
                src="assets/img/illustrations/profiles/profile-1.png"
                alt="Profile"
              />
              {/* Profile picture help block */}
              <p className="text-sm text-gray-500 mb-4">JPG or PNG no larger than 5 MB</p>
              {/* Profile picture upload button */}
              <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg">
                Upload new image
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          {/* Account details card */}
          <div className="card bg-white shadow rounded-lg mb-4">
            <div className="card-header p-4 border-b border-gray-200">Account Details</div>
            <div className="card-body p-4">
              <form>
                {/* Form Group (username) */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the site)
                  </label>
                  <input
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    defaultValue="username"
                  />
                </div>

                {/* Form Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  {/* Form Group (first name) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      defaultValue="Valerie"
                    />
                  </div>
                  {/* Form Group (last name) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      defaultValue="Luna"
                    />
                  </div>
                </div>

                {/* Form Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  {/* Form Group (organization name) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputOrgName">
                      Organization name
                    </label>
                    <input
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      defaultValue="Start Bootstrap"
                    />
                  </div>
                  {/* Form Group (location) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputLocation">
                      Location
                    </label>
                    <input
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      defaultValue="San Francisco, CA"
                    />
                  </div>
                </div>

                {/* Form Group (email address) */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    defaultValue="name@example.com"
                  />
                </div>

                {/* Form Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  {/* Form Group (phone number) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      defaultValue="555-123-4567"
                    />
                  </div>
                  {/* Form Group (birthday) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      defaultValue="06/10/1988"
                    />
                  </div>
                </div>

                {/* Save changes button */}
                <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg" type="button">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
