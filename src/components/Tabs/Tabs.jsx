export const Tabs = ({ tabs, onTabSelected, activeTabId, getActiveId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={`${activeTabId === tab.id && 'is-active'}`}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => activeTabId !== tab.id && onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {getActiveId(activeTabId).content}
    </div>
  </div>
);
