import React, { Component } from 'react';
import { Progress, Button, Header, Image, Modal } from 'semantic-ui-react';

const ProgressExampleProgress = () => <Progress percent={23} progress active />;

class ModalDonate extends Component {
	state = { open: false };

	show = dimmer => () => this.setState({ dimmer, open: true });
	close = () => this.setState({ open: false });

	render() {
		const { open, dimmer } = this.state;

		return (
			<div>
				<Button color="instagram" onClick={this.show('blurring')}>
					Help us!
				</Button>
				<Modal dimmer={dimmer} open={open} onClose={this.close}>
					<Modal.Header>We need your help!</Modal.Header>
					<Modal.Content image>
						<Image
							wrapped
							size="medium"
							src="/assets/images/avatar/large/rachel.png"
						/>
						<Modal.Description>
							<Header />
							<p>
								We're trying to raise money to repair our gigs so we can
								continue using them.
							</p>
							<p>Are you able to help us?</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button color="black" onClick={this.close}>
							Nope, not today
						</Button>
						<Button
							positive
							icon="checkmark"
							labelPosition="right"
							content="Yep, I can help"
							onClick={this.close}
						/>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export { ModalDonate, ProgressExampleProgress };
