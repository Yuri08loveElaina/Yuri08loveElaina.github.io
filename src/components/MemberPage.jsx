// src/pages/MemberPage.jsx
import React, { useState } from 'react';
import './MemberPage.css';

const membersData = [
  {
    id: 1,
    name: 'Yuri08',
    role: 'Red Team',
    email: 'yuri08@elaina.core',
    avatar: 'https://files.catbox.moe/755fgv.png',
    contributions: ['CVE-2025-6070', 'ElainaOS v7'],
  },
  {
    id: 2,
    name: 'ElainaChan',
    role: 'Frontend',
    email: 'elaina@core.org',
    avatar: 'https://files.catbox.moe/xxxxxx.png',
    contributions: ['Dashboard UI', 'Dark Mode System'],
  },
  {
    id: 3,
    name: 'Kanon',
    role: 'Reverse Engineering',
    email: 'kanon@core.org',
    avatar: 'https://files.catbox.moe/yyyyyy.png',
    contributions: ['Firmware Analyzer', 'Malware Research'],
  },
];

export default function MemberPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [selectedMember, setSelectedMember] = useState(null);

  const roles = ['All', ...new Set(membersData.map(m => m.role))];

  const filteredMembers = membersData.filter(member => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className={`member-page`}>
      <h2 className="member-title">Thành viên Elaina Core</h2>

      <div className="member-controls">
        <input
          type="text"
          placeholder="Tìm theo tên hoặc email..."
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterRole}
          onChange={e => setFilterRole(e.target.value)}
        >
          {roles.map(role => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      <div className="member-grid">
        {filteredMembers.map(member => (
          <div
            key={member.id}
            className="member-card"
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.avatar} alt={member.name} className="member-avatar" />
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
            <div className="member-email">{member.email}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedMember.avatar} alt={selectedMember.name} className="modal-avatar" />
            <h3>{selectedMember.name}</h3>
            <p><strong>Vai trò:</strong> {selectedMember.role}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p><strong>Đóng góp:</strong></p>
            <ul>
              {selectedMember.contributions.map((item, i) => (
                <li key={i}>🔗 <a href={`/writeup?search=${item}`} target="_blank">{item}</a></li>
              ))}
            </ul>
            <button onClick={() => setSelectedMember(null)} className="modal-close">Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}
