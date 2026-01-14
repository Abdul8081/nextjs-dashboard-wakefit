import { UsersIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Page Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Customers
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your customers and view their activity
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <UsersIcon className="h-5 w-5" />
          Add Customer
        </button>
      </div>

      {/* Content Card */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Customer Overview
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            A quick summary of your customer base
          </p>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Total Customers</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">1,248</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Active This Month</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">312</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Pending Invoices</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">47</p>
          </div>
        </div>
      </div>

      {/* Empty State / Placeholder */}
      <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
        <UsersIcon className="mx-auto h-10 w-10 text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">
          No customer list yet
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Start by adding your first customer to see data here.
        </p>
        <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          Add your first customer
        </button>
      </div>
    </div>
  );
}
