import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('example', { path: 'example/:id' });
  this.route('login');
  this.route('logout');

  this.route('manage', function() {
    this.route('alert', { path: 'alert/:alertId' });
    this.route('alerts', function() {
      this.route('edit', { path: '/:alertId' });
    });
  });

  this.route('rca', { path: '/rca' }, function() {
    this.route('details', { path: '/:metricId' }, function() {
      this.route('metrics');
      this.route('events');
      this.route('dimensions', function() {
        this.route('heatmap', {path: '/'});
      });
    });
  });
  this.route('self-serve', function() {
    this.route('create-alert');
    this.route('import-metric');
  });
  this.route('screenshot', { path: 'screenshot/:anomalyId' });
  this.route('rootcause', { path: 'rootcause/:rootcauseId' });
});

export default Router;
