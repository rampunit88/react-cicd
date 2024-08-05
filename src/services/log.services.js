import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

const customJSON = log => ({
 msg: log.message,
 level: log.level.label,
 stacktrace: log.stacktrace
});

remote.apply(log, { format: customJSON, url: '/logger' });

log.enableAll();

//log.info('Message one');
//log.warn('Message two');

export default log;