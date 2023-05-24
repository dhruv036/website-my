import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-status', function (hooks) {
  setupRenderingTest(hooks);

  test('status is "DNE"', async function (assert) {
    this.setProperties({
      status: 'DNE',
      isStatusUpdating: false,
      updateStatus: (statusPayLoad) => {
        const {
          currentStatus: { updatedAt, from, state },
        } = statusPayLoad;
        assert.equal(state, 'ACTIVE', 'new state present in the payload');
        assert.ok(typeof from === 'number', 'from is a numeric timestamp');
        assert.ok(
          typeof updatedAt === 'number',
          'updatedAt is a numeric timestamp'
        );
      },
      changeStatus: () => {
        assert.ok('true', 'button is clicked');
      },
    });
    await render(hbs`
            <UserStatus 
                @status={{this.status}} 
                @changeStatus={{this.changeStatus}} 
                @isStatusUpdating={{this.isStatusUpdating}}
                @updateStatus={{this.updateStatus}} 
            />
            `);

    assert.dom('[data-test-heading]').exists();
    assert.dom('[data-test-status]').hasText("Your Status doesn't exist");

    assert.dom('[data-test-btn-div]').exists();
    assert.dom('[data-test-btn="ACTIVE"]').exists();
    assert.dom('[data-test-btn="ACTIVE"]').hasClass('buttons__active');
    assert.dom('[data-test-btn="ACTIVE"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="ACTIVE"]')
      .hasText('Change your status to Active');
    await click('[data-test-btn="ACTIVE"]');

    assert.dom('[data-test-btn="IDLE"]').exists();
    assert.dom('[data-test-btn="IDLE"]').hasClass('buttons__idle');
    assert.dom('[data-test-btn="IDLE"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="IDLE"]')
      .hasText('Change your status to Idle');
    await click('[data-test-btn="IDLE"]');

    assert.dom('[data-test-btn="OOO"]').exists();
    assert.dom('[data-test-btn="OOO"]').hasClass('buttons__ooo');
    assert.dom('[data-test-btn="OOO"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="OOO"]')
      .hasText('Change your status to OOO');
    await click('[data-test-btn="OOO"]');
  });

  test('status is "ONBOARDING"', async function (assert) {
    this.setProperties({
      status: 'ONBOARDING',
      isStatusUpdating: false,
      updateStatus: (statusPayLoad) => {
        const {
          currentStatus: { updatedAt, from, state },
        } = statusPayLoad;
        assert.equal(state, 'ACTIVE', 'new state present in the payload');
        assert.ok(typeof from === 'number', 'from is a numeric timestamp');
        assert.ok(
          typeof updatedAt === 'number',
          'updatedAt is a numeric timestamp'
        );
      },
    });
    await render(hbs`
            <UserStatus 
                @status={{this.status}} 
                @isStatusUpdating={{this.isStatusUpdating}}
                @updateStatus={{this.updateStatus}}
            />
            `);

    assert.dom('[data-test-heading]').exists();
    assert.dom('[data-test-onboarding-details]').exists();
    assert.dom('[data-test-status]').hasText('You are undergoing onboarding');
    assert
      .dom('[data-test-details-p1]')
      .hasText(
        'If you are a Developer, please complete your submission for Lift Simulation, and ask for doubts in the team chat on Discord.'
      );
    assert
      .dom('[data-test-details-p2]')
      .hasText(
        'If you are not a developer, please contact Ankush for next steps.'
      );
    assert.dom('[data-test-active-button]').exists();
    assert.dom('[data-test-active-button]').hasClass('buttons__active');
    assert.dom('[data-test-active-button]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="ACTIVE"]')
      .hasText('Change your status to Active');
    await click('[data-test-active-button]');
  });

  test('status is "ACTIVE"', async function (assert) {
    this.setProperties({
      status: 'ACTIVE',
      isStatusUpdating: false,
      changeStatus: () => {
        assert.ok('true', 'button is clicked');
      },
    });
    await render(hbs`
            <UserStatus 
                @status={{this.status}} 
                @changeStatus={{this.changeStatus}} 
                @isStatusUpdating={{this.isStatusUpdating}}
            />
            `);
    assert.dom('[data-test-heading]').exists();
    assert.dom('[data-test-status]').hasText('You are Active');

    assert.dom('[data-test-btn-div]').exists();
    assert.dom('[data-test-btn="IDLE"]').exists();
    assert.dom('[data-test-btn="IDLE"]').hasClass('buttons__idle');
    assert.dom('[data-test-btn="IDLE"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="IDLE"]')
      .hasText('Change your status to Idle');
    await click('[data-test-btn="IDLE"]');

    assert.dom('[data-test-btn="OOO"]').exists();
    assert.dom('[data-test-btn="OOO"]').hasClass('buttons__ooo');
    assert.dom('[data-test-btn="OOO"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="OOO"]')
      .hasText('Change your status to OOO');
    await click('[data-test-btn="OOO"]');
  });

  test('status is "IDLE"', async function (assert) {
    this.setProperties({
      status: 'IDLE',
      isStatusUpdating: false,
      updateStatus: (statusPayLoad) => {
        const {
          currentStatus: { updatedAt, from, state },
        } = statusPayLoad;
        assert.equal(state, 'ACTIVE', 'new state present in the payload');
        assert.ok(typeof from === 'number', 'from is a numeric timestamp');
        assert.ok(
          typeof updatedAt === 'number',
          'updatedAt is a numeric timestamp'
        );
      },
      changeStatus: () => {
        assert.ok('true', 'button is clicked');
      },
    });
    await render(hbs`
            <UserStatus 
                @status={{this.status}} 
                @changeStatus={{this.changeStatus}} 
                @isStatusUpdating={{this.isStatusUpdating}}
                @updateStatus={{this.updateStatus}}
            />
            `);
    assert.dom('[data-test-heading]').exists();
    assert.dom('[data-test-status]').hasText('You are Idle');

    assert.dom('[data-test-btn-div]').exists();
    assert.dom('[data-test-btn="ACTIVE"]').exists();
    assert.dom('[data-test-btn="ACTIVE"]').hasClass('buttons__active');
    assert.dom('[data-test-btn="ACTIVE"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="ACTIVE"]')
      .hasText('Change your status to Active');
    await click('[data-test-btn="ACTIVE"]');

    assert.dom('[data-test-btn="OOO"]').exists();
    assert.dom('[data-test-btn="OOO"]').hasClass('buttons__ooo');
    assert.dom('[data-test-btn="OOO"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="OOO"]')
      .hasText('Change your status to OOO');
    await click('[data-test-btn="OOO"]');
  });

  test('status is "OOO"', async function (assert) {
    this.setProperties({
      status: 'OOO',
      isStatusUpdating: false,
      updateStatus: (statusPayLoad) => {
        const {
          currentStatus: { updatedAt, from, state },
        } = statusPayLoad;
        assert.equal(state, 'ACTIVE', 'new state present in the payload');
        assert.ok(typeof from === 'number', 'from is a numeric timestamp');
        assert.ok(
          typeof updatedAt === 'number',
          'updatedAt is a numeric timestamp'
        );
      },
      changeStatus: () => {
        assert.ok('true', 'button is clicked');
      },
    });
    await render(hbs`
            <UserStatus 
                @status={{this.status}} 
                @changeStatus={{this.changeStatus}}
                @isStatusUpdating={{this.isStatusUpdating}}
                @updateStatus={{this.updateStatus}}
            />
            `);

    assert.dom('[data-test-heading]').exists();
    assert.dom('[data-test-status]').hasText('You are OOO');

    assert.dom('[data-test-btn-div]').exists();
    assert.dom('[data-test-btn="ACTIVE"]').exists();
    assert.dom('[data-test-btn="ACTIVE"]').hasClass('buttons__active');
    assert.dom('[data-test-btn="ACTIVE"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="ACTIVE"]')
      .hasText('Change your status to Active');
    await click('[data-test-btn="ACTIVE"]');

    assert.dom('[data-test-btn="IDLE"]').exists();
    assert.dom('[data-test-btn="IDLE"]').hasClass('buttons__idle');
    assert.dom('[data-test-btn="IDLE"]').isNotDisabled();
    assert
      .dom('[data-test-btn-label="IDLE"]')
      .hasText('Change your status to Idle');
    await click('[data-test-btn="IDLE"]');
  });
});