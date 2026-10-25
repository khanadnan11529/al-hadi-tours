import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminEnquiries.css";

function AdminEnquiries() {

    const navigate = useNavigate();

    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);



    const totalEnquiries = enquiries.length;

    const newEnquiries = enquiries.filter(
        (enquiry) => enquiry.status === "NEW"
    ).length;

    const contactedEnquiries = enquiries.filter(
        (enquiry) => enquiry.status === "CONTACTED"
    ).length;

    const completedEnquiries = enquiries.filter(
        (enquiry) => enquiry.status === "COMPLETED"
    ).length;

    const filteredEnquiries = enquiries.filter((enquiry) => {

        const search = searchTerm.toLowerCase();

        const matchesSearch =
            enquiry.name?.toLowerCase().includes(search) ||
            enquiry.phone?.toLowerCase().includes(search) ||
            enquiry.email?.toLowerCase().includes(search) ||
            enquiry.service?.toLowerCase().includes(search) ||
            enquiry.message?.toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "ALL" ||
            enquiry.status === statusFilter;

        return matchesSearch && matchesStatus;
    });


    const fetchEnquiries = async () => {
        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin-login", { replace: true });
                return;
            }

            const response = await fetch(
                "http://localhost:8081/api/enquiries",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("token");
                localStorage.removeItem("adminLoggedIn");
                navigate("/admin-login", { replace: true });
                return;
            }

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch enquiries: ${response.status}`
                );
            }

            const data = await response.json();
            setEnquiries(Array.isArray(data) ? data : []);

        } catch (error) {
            console.error("Error fetching enquiries:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchEnquiries();
    }, []);


    const updateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                alert("Please log in again.");
                navigate("/admin-login", { replace: true });
                return;
            }

            const response = await fetch(
                `http://localhost:8081/api/enquiries/${id}/status`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        status: status
                    })
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Update failed (${response.status}): ${errorText}`
                );
            }

            // Refresh enquiries after a successful update
            await fetchEnquiries();

        } catch (error) {
            console.error("Error updating status:", error);
            alert(error.message || "Failed to update enquiry status.");
        }
    };




    const deleteEnquiry = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this enquiry?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                alert("Please log in again.");
                navigate("/admin-login", { replace: true });
                return;
            }

            const response = await fetch(
                `http://localhost:8081/api/enquiries/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Delete failed (${response.status}): ${errorText}`
                );
            }

            setEnquiries((previousEnquiries) =>
                previousEnquiries.filter(
                    (enquiry) => enquiry.id !== id
                )
            );

            if (selectedEnquiry?.id === id) {
                setSelectedEnquiry(null);
            }

            alert("Enquiry deleted successfully.");

        } catch (error) {
            console.error("Error deleting enquiry:", error);
            alert(error.message || "Failed to delete enquiry.");
        }
    };


    // Logout
    const handleLogout = () => {
        localStorage.removeItem("adminLoggedIn");
        navigate("/admin-login", { replace: true });
    };

    if (loading) {
        return <div className="admin-loading">Loading enquiries...</div>;
    }

    return (
        <div className="admin-enquiries">

            <div className="admin-header">

                <div>
                    <h1>Enquiry Management</h1>
                    <p>Manage customer enquiries and their status.</p>
                </div>

                <button
                    className="admin-logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

            <div className="admin-stats">

                <div className="stat-card">
                    <span className="stat-title">Total Enquiries</span>
                    <span className="stat-number">{totalEnquiries}</span>
                </div>

                <div className="stat-card">
                    <span className="stat-title">New</span>
                    <span className="stat-number">{newEnquiries}</span>
                </div>

                <div className="stat-card">
                    <span className="stat-title">Contacted</span>
                    <span className="stat-number">{contactedEnquiries}</span>
                </div>

                <div className="stat-card">
                    <span className="stat-title">Completed</span>
                    <span className="stat-number">{completedEnquiries}</span>
                </div>

            </div>

            <div className="enquiry-filters">

                <input
                    type="text"
                    placeholder="Search enquiries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="filter-select"
                >
                    <option value="ALL">All Status</option>
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="COMPLETED">COMPLETED</option>
                </select>

            </div>

            <div className="enquiry-table-container">

                <table className="enquiry-table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Travel Date</th>
                            <th>Travelers</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredEnquiries.length === 0 ? (

                            <tr>
                                <td colSpan="10" className="no-enquiries">
                                    No enquiries found.
                                </td>
                            </tr>

                        ) : (

                            filteredEnquiries.map((enquiry) => (

                                <tr key={enquiry.id}>

                                    <td>{enquiry.id}</td>

                                    <td>{enquiry.name}</td>

                                    <td>{enquiry.phone}</td>

                                    <td>{enquiry.email}</td>

                                    <td>{enquiry.service}</td>

                                    <td>
                                        {enquiry.travelDate
                                            ? new Date(
                                                `${enquiry.travelDate}T00:00:00`
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )
                                            : "-"}
                                    </td>

                                    <td>{enquiry.travelers}</td>

                                    <td className="message-cell">
                                        {enquiry.message}
                                    </td>

                                    <td>

                                        <select
                                            className={`status-select ${enquiry.status?.toLowerCase()}`}
                                            value={enquiry.status || "NEW"}
                                            onChange={(e) =>
                                                updateStatus(
                                                    enquiry.id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option value="NEW">
                                                NEW
                                            </option>

                                            <option value="CONTACTED">
                                                CONTACTED
                                            </option>

                                            <option value="COMPLETED">
                                                COMPLETED
                                            </option>

                                        </select>

                                    </td>

                                    <td>
                                        <div className="action-buttons">

                                            <button
                                                className="view-button"
                                                onClick={() => setSelectedEnquiry(enquiry)}
                                            >
                                                View
                                            </button>

                                            <button
                                                className="delete-button"
                                                onClick={() => deleteEnquiry(enquiry.id)}
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>


            {selectedEnquiry && (
                <div
                    className="enquiry-modal-overlay"
                    onClick={() => setSelectedEnquiry(null)}
                >
                    <div
                        className="enquiry-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="modal-header">
                            <div>
                                <h2>Enquiry Details</h2>
                                <p>Customer enquiry information</p>
                            </div>

                            <button
                                className="modal-close"
                                onClick={() => setSelectedEnquiry(null)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="modal-details">

                            <div className="detail-item">
                                <span>ID</span>
                                <strong>{selectedEnquiry.id}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Customer Name</span>
                                <strong>{selectedEnquiry.name}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Phone</span>
                                <strong>{selectedEnquiry.phone}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Email</span>
                                <strong>{selectedEnquiry.email}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Service</span>
                                <strong>{selectedEnquiry.service}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Travel Date</span>
                                <strong>
                                    {selectedEnquiry.travelDate
                                        ? new Date(
                                            `${selectedEnquiry.travelDate}T00:00:00`
                                        ).toLocaleDateString(
                                            "en-IN",
                                            {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            }
                                        )
                                        : "-"}
                                </strong>
                            </div>

                            <div className="detail-item">
                                <span>Travelers</span>
                                <strong>{selectedEnquiry.travelers}</strong>
                            </div>

                            <div className="detail-item">
                                <span>Status</span>
                                <strong
                                    className={`modal-status ${selectedEnquiry.status?.toLowerCase()}`}
                                >
                                    {selectedEnquiry.status || "NEW"}
                                </strong>
                            </div>

                            <div className="detail-item detail-message">
                                <span>Message</span>
                                <p>
                                    {selectedEnquiry.message || "No message provided."}
                                </p>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button
                                className="modal-close-button"
                                onClick={() => setSelectedEnquiry(null)}
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default AdminEnquiries;